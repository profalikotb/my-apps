// GET /api/apps → every Vercel project in this account that has a production deployment.
// Needs env var VERCEL_TOKEN (read-only use). Optional: VERCEL_TEAM_ID if the projects live under a team.
// The token never leaves the server; the browser only receives names + public URLs.
module.exports = async (req, res) => {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return res.status(200).json({ ok: false, error: "VERCEL_TOKEN not set", projects: [] });

  const team = process.env.VERCEL_TEAM_ID ? `&teamId=${encodeURIComponent(process.env.VERCEL_TEAM_ID)}` : "";
  const out = [];
  let until = "";
  try {
    for (let page = 0; page < 10; page++) {
      const r = await fetch(`https://api.vercel.com/v10/projects?limit=100${team}${until}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!r.ok) return res.status(200).json({ ok: false, error: `Vercel API ${r.status}`, projects: [] });
      const j = await r.json();
      for (const p of j.projects || []) {
        const prod = p.targets && p.targets.production;
        if (!prod) continue; // never deployed to production → not an app yet
        const aliases = (prod.alias || []).filter(Boolean);
        // prefer a custom domain, else the shortest *.vercel.app alias, else <name>.vercel.app
        const custom = aliases.filter((a) => !a.endsWith(".vercel.app")).sort((a, b) => a.length - b.length)[0];
        const vapp = aliases.filter((a) => a.endsWith(".vercel.app")).sort((a, b) => a.length - b.length)[0];
        const domain = custom || vapp || `${p.name}.vercel.app`;
        out.push({
          name: p.name,
          url: `https://${domain}`,
          hosts: [...new Set([domain, ...aliases, `${p.name}.vercel.app`])],
          created: p.createdAt || 0,
          updated: p.updatedAt || 0,
        });
      }
      if (!j.pagination || !j.pagination.next) break;
      until = `&until=${j.pagination.next}`;
    }
  } catch (e) {
    return res.status(200).json({ ok: false, error: String(e && e.message || e), projects: [] });
  }
  out.sort((a, b) => b.created - a.created); // newest first
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
  res.status(200).json({ ok: true, projects: out });
};
