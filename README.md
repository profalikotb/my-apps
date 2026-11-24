# Prof Ali Kotb — Apps (launcher)

One installable page (PWA) with shortcuts to all apps. Static — no build step, no keys.

- **Automatic:** every Vercel project with a production deployment appears by itself under «جديد — تلقائي» (red NEW badge the first time). Needs env var `VERCEL_TOKEN` in this project (Settings → Environment Variables), plus `VERCEL_TEAM_ID` only if the projects are under a team. Hide unwanted projects via `EXCLUDE` in `apps.js`.
- **Edit the list:** `apps.js` (name EN/AR, URL, emoji icon, colour, group). Push → Vercel redeploys.
- **Install:** desktop Chrome/Edge → ⤓ Install button (or the install icon in the address bar); Android Chrome → Install; iPhone Safari → Share → Add to Home Screen.
- **On each device:** ★ favourites, Edit → × to hide, "Add shortcut" for personal links (saved on that device only).
- Green dot = site answered a request just now; red = no response.
- Works offline as a launcher (the apps themselves need internet).
