const site = {
  name: "Nikos Emmanouilidis",
  fullName: "Nikolaos (Nikos) Emmanouilidis",
  role: "Full-stack developer",
  focus: "PHP / Laravel · JavaScript",
  location: "Komotini, Greece",
  availability: "Open to remote, full-time roles",
  hours: "European hours, with US overlap where needed",
  email: "nik.s.emman@gmail.com",
  github: "https://github.com/NikEmman",
  linkedin: "https://www.linkedin.com/in/nikos-emmanouilidis-5a6232296/",
};

export const stats = [
  {
    value: "~7,200",
    label: "lines of Pest/PHPUnit tests introduced to a codebase that had none",
  },
  {
    value: "700+",
    label: "commits to production Laravel codebases",
  },
  {
    value: "36",
    label: "official document types generated offline by a tool I built",
  },
  {
    value: "1h → 10m",
    label: "daily manual work cut by browser automation",
  },
];

export const principles = [
  {
    title: "Fix it at the root",
    text: "While building personal-data purging, I found static state leaking between jobs on long-lived queue workers, and decrypted personal data reaching the logs. I fixed both at the source.",
  },
  {
    title: "Test first",
    text: "I brought automated testing to a billing platform that had none, and built its core features test-first.",
  },
  {
    title: "Automate the grind",
    text: "If a task is repetitive and rule-bound, I automate it, even on locked-down machines where the only tools allowed are a browser and an extension.",
  },
];

export default site;
