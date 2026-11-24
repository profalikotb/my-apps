// Edit this list to add, remove or rename shortcuts. `url` must be the full https address.
window.APPS = [
  // ── Clinic ──
  { id: "queue", group: "clinic", en: "Smart Patient Queue", ar: "نظام الدور الذكي", url: "https://call-patients-order.vercel.app", icon: "📣", color: "#0f766e" },
  { id: "clinic", group: "clinic", en: "Clinic Booking", ar: "حجز العيادة", url: "https://clinic-nine-ivory.vercel.app", icon: "🗓️", color: "#1d4ed8" },
  { id: "appointments", group: "clinic", en: "Clinic Appointments", ar: "مواعيد العيادة", url: "https://clinic-appointments-five.vercel.app", icon: "⏰", color: "#2563eb" },
  { id: "address", group: "clinic", en: "Clinic Addresses", ar: "عناوين العيادات", url: "https://clinic-adress.vercel.app", icon: "📍", color: "#b91c1c" },
  { id: "dralikotb", group: "clinic", en: "Dr Ali Kotb — Booking", ar: "أ.د. على قطب — الحجز", url: "https://dralikotb.vercel.app", icon: "🩺", color: "#0e7490" },

  // ── Research & teaching ──
  { id: "neuroscholar", group: "research", en: "NeuroScholar AI", ar: "نيوروسكولار", url: "https://neuroscholar-ai-psi.vercel.app", icon: "🧠", color: "#1f4e79" },
  { id: "studio", group: "research", en: "Research Studio", ar: "استوديو البحث", url: "https://neuroscholar-ai-psi.vercel.app/studio", icon: "📑", color: "#163a5a" },
  { id: "paperupdate", group: "research", en: "Neurosurgery Paper Update", ar: "تحديث الأبحاث", url: "https://neurosurgerypaperupdate.vercel.app", icon: "📰", color: "#4338ca" },
  { id: "paperupdate-eads", group: "research", en: "Paper Update (EADS)", ar: "تحديث الأبحاث (EADS)", url: "https://neurosurgerypaperupdate-eads.vercel.app", icon: "🗞️", color: "#6d28d9" },
  { id: "academy", group: "research", en: "Neurosurgery AI Academy", ar: "أكاديمية جراحة المخ", url: "https://frontend-gules-delta-31.vercel.app", icon: "🎓", color: "#7c3aed" },
  { id: "rephrase", group: "research", en: "Smart Rephrase", ar: "إعادة الصياغة الذكية", url: "https://smartrephrase.vercel.app", icon: "✍️", color: "#047857" },

  // ── Personal ──
  { id: "prayer", group: "personal", en: "Prayer Times", ar: "مواقيت الصلاة", url: "https://prayertimealikotb.vercel.app", icon: "🕌", color: "#15803d" },
  { id: "quran", group: "personal", en: "My Quran Revival", ar: "عهدي مع القرآن", url: "https://quranrevival.vercel.app", icon: "📖", color: "#166534" },
  { id: "radio", group: "personal", en: "Smart Radio", ar: "الراديو الذكي", url: "https://smartradio.vercel.app", icon: "📻", color: "#c2410c" },
  { id: "family", group: "personal", en: "Smart Family Tree", ar: "شجرة العائلة الذكية", url: "https://makefamilytree.vercel.app", icon: "🌳", color: "#3f6212" },

  // ── Websites ──
  { id: "profile", group: "web", en: "Prof Ali Kotb — Links", ar: "روابط أ.د. على قطب", url: "https://profalikotb.vercel.app", icon: "🔗", color: "#334155" },
  { id: "dralikotbme", group: "web", en: "Personal Profile", ar: "الملف الشخصي", url: "https://dralikotbme.vercel.app", icon: "👤", color: "#475569" },
  { id: "drsayedkotb", group: "web", en: "Dr Sayed Kotb", ar: "د. سيد قطب", url: "https://drsayedkotb.vercel.app", icon: "🏥", color: "#0369a1" },
  { id: "hawary", group: "web", en: "Mohamed Hawary", ar: "محمد هواري", url: "https://mohamedhawary.vercel.app", icon: "🏥", color: "#0284c7" },
];

window.GROUPS = [
  { id: "clinic", en: "Clinic", ar: "العيادة" },
  { id: "research", en: "Research & teaching", ar: "البحث والتعليم" },
  { id: "personal", en: "Personal", ar: "شخصي" },
  { id: "web", en: "Websites", ar: "المواقع" },
  { id: "auto", en: "New — auto-detected from Vercel", ar: "جديد — تلقائي من Vercel" },
  { id: "mine", en: "My shortcuts", ar: "اختصاراتي" },
];

// Vercel projects to never show automatically (project names, as in the Vercel dashboard).
// Any new Vercel project NOT listed in APPS above appears by itself in «جديد — تلقائي».
// To give it an Arabic name / icon / proper group, add it to APPS — it then leaves the auto group.
window.EXCLUDE = [
  "my-apps", // this launcher
];
