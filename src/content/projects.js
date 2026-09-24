const projects = [
  {
    title: "Browser automation suite",
    subtitle: "Work work!, Cancellor, Submitter, Notifier",
    description:
      "Firefox extensions that fill forms, run searches, extract results and update records on locked-down internal web apps, all within IT policy. Together they cut more than an hour of daily manual work to about ten minutes.",
    tech: ["JavaScript", "WebExtensions API"],
    image: { src: "/extension.png", alt: "Work work! extension popup" },
    links: [
      {
        label: "Add-on",
        href: "https://addons.mozilla.org/en-US/firefox/addon/work-work/",
      },
      { label: "Work work!", href: "https://github.com/NikEmman/workwork" },
      { label: "Cancellor", href: "https://github.com/NikEmman/cancellor" },
      { label: "Submitter", href: "https://github.com/NikEmman/submiter" },
      { label: "Notifier", href: "https://github.com/NikEmman/notifier" },
    ],
  },
  {
    title: "Messenger",
    subtitle: "Full-stack chat app",
    description:
      "A Rails monolith serving a React front end through API controllers. It has custom authentication and authorization, group conversations with a searchable user base, rich-text messages and profiles with avatars. Models and controllers are tested with RSpec, and every component has tests.",
    tech: ["Ruby on Rails", "React", "PostgreSQL", "RSpec"],
    image: { src: "/messenger.png", alt: "Messenger conversation view" },
    links: [
      { label: "Live", href: "https://messenger-lr1s.onrender.com/" },
      { label: "Code", href: "https://github.com/NikEmman/messenger" },
    ],
  },
  {
    title: "Roxanne's Quest",
    subtitle: "Coding game for preschoolers",
    description:
      "A 2D puzzle game where children program a robot vacuum to reach dirty spots, then watch the program run. Every five levels a password screen nudges them to write a few letters down. Builds for Windows, macOS and Linux.",
    tech: ["Ruby", "DragonRuby"],
    image: { src: "/roxanne.png", alt: "Roxanne's Quest level screen" },
    links: [
      { label: "Play", href: "https://nikemman.itch.io/roxannes-quest" },
      { label: "Code", href: "https://github.com/NikEmman/homecoming" },
    ],
  },
  {
    title: "The Odin Project",
    subtitle: "Open-source contributions",
    description:
      "Learners kept failing to create Flickr accounts for a Rails API project, so I rewrote the lesson around the Pexels API, archived the old one, and updated the lesson data on the site. That's 5 merged PRs across 3 repositories.",
    tech: ["Ruby on Rails", "Markdown", "Open source"],
    links: [
      {
        label: "Lesson PR",
        href: "https://github.com/TheOdinProject/curriculum/pull/29577",
      },
      {
        label: "Site PR",
        href: "https://github.com/TheOdinProject/theodinproject/pull/5016",
      },
    ],
  },
];

export default projects;
