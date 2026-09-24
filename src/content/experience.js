export const currentRole = {
  title: "Software Developer",
  org: "Smart-city SaaS company, Greece",
  summary:
    "A Laravel platform used by Greek municipalities for urban operations, IoT alerts and GIS. I work across the stack on two of its products, from schema to UI.",
};

export const policeRole = {
  title: "Police Officer, internal tools developer",
  org: "Hellenic Police",
  summary:
    "Eighteen years in the service, including investigative work and drafting documents for the courts. I built these tools on my own initiative to take repetitive paperwork off officers' desks.",
};

const caseStudies = [
  {
    id: "partner-portal",
    role: "current",
    kicker: "Production · B2B",
    title: "Partner, commission & billing portal",
    context:
      "A B2B platform where distributors, resellers and affiliates sell a monitoring service, allocate devices, and get invoiced and paid commission. I worked on it from its first commit.",
    points: [
      "**Introduced automated testing**: about 7,200 lines of Pest/PHPUnit tests across 36 files, with core features built test-first.",
      "Designed the **authorization layer** for a multi-tier partner hierarchy using Gates, Policies and ownership rules, plus auth, password reset and throttled invitation flows.",
      "Remodelled partner contracts as a **time-windowed history**, so billing terms and VAT resolve for the period being invoiced.",
      "Built **centralised, database-backed logging** (facade, severities, retention, admin viewer), migrated the whole app onto it, and closed a silent log-loss path.",
      "Built a **customer mailer that can't double-send**: queued short batches, retry-safe sends, unsubscribe support and shared HTML sanitising.",
      "Added superadmin **impersonation** of partner users, role-based dashboards, CSV/PDF/JSON exports and a Greek/English UI.",
    ],
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "Pest",
      "PHPUnit",
      "Queues",
      "Blade",
      "Tailwind CSS",
    ],
    links: [],
  },
  {
    id: "iot-monitoring",
    role: "current",
    kicker: "Production · HealthTech / IoT",
    title: "Elder-care IoT monitoring",
    context:
      "Monitoring for older people living alone. Wearable trackers and gateways raise fall, immobility and panic alerts, which escalate by call and SMS to emergency contacts. The same codebase runs white-labelled for municipalities and for families.",
    points: [
      "Built **GDPR-style personal-data purging** for archived patients with queued jobs. Along the way I found and fixed static state leaking across long-lived queue workers, and decrypted personal data being written to logs.",
      "Integrated a **third-party IoT SIM management API**, covering the full SIM lifecycle: single and batch registration, rate-plan changes, sync, and an observer-driven audit trail.",
      "Replaced in-memory offset pagination on the high-volume event log with **keyset (cursor) pagination** and a composite index, and made event filters respect each patient's time zone.",
      "Built an installation-wide **statistics dashboard** with incident trends and notification delivery reliability.",
      "Led the **mobile-first redesign**, added guided onboarding tours, and reworked the alert-workflow editor that decides who gets called or texted.",
      "Built the **white-label module** that brands one codebase per installation, covering login, logos, emails and routes, and migrated the maps to the current Google Maps API.",
    ],
    stack: [
      "Laravel 12",
      "PHP 8",
      "MySQL",
      "Queues & Jobs",
      "Observers",
      "Twilio",
      "Chart.js",
      "Google Maps JS",
    ],
    links: [],
  },
  {
    id: "vaxyp",
    role: "police",
    kicker: "Internal tool · Public sector",
    title: "Vaxyp",
    context:
      "Paperwork automation for Hellenic Police investigators, built on my own initiative. The constraints were strict: locked-down workstations, no API access to internal systems, and no servers.",
    points: [
      "**Sole developer** (360+ commits) of an offline-first web app, also shipped as a portable Windows build (Electron) released through **GitHub Actions**.",
      "Parses records pasted from the police ID and vehicle systems into **36 official Word documents**, generated client-side (JSZip/OOXML) with correct Greek case and gender inflection.",
      "**No backend and no telemetry**, so personal data never leaves the workstation.",
      "Ships with offline PDF tools that include Greek **OCR** (pdf-lib, Tesseract.js), and a scale-accurate **accident-scene sketcher** (Fabric.js) with undo, measuring and keyboard shortcuts.",
      "Used daily by **at least 15 officers**, cutting the time per administrative workflow by 20% or more.",
    ],
    stack: ["JavaScript", "Electron", "JSZip / OOXML", "Tesseract.js", "Fabric.js"],
    image: { src: "/vaxyp.webp", alt: "Vaxyp document generator interface" },
    links: [
      { label: "Live", href: "https://vaxyp.pages.dev" },
      { label: "Code", href: "https://github.com/NikEmman/vaxyp" },
    ],
  },
];

export default caseStudies;
