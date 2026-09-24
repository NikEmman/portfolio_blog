import { useEffect } from "react";
import PropTypes from "prop-types";
import CaseStudy from "../components/CaseStudy";
import Emphasis from "../components/Emphasis";
import Icon from "../components/Icon";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import site, { principles, stats } from "../content/site";
import caseStudies, { currentRole, policeRole } from "../content/experience";
import projects from "../content/projects";
import skills from "../content/skills";
import about from "../content/about";
import "./Home.css";

const RoleHeader = ({ role }) => {
  return (
    <div className="role-header">
      <div>
        <h3 className="role-title">{role.title}</h3>
        <p className="role-org">
          {role.org}
          {role.period && <span className="role-period"> · {role.period}</span>}
        </p>
      </div>
      <p className="role-summary">{role.summary}</p>
    </div>
  );
};

RoleHeader.propTypes = {
  role: PropTypes.shape({
    title: PropTypes.string,
    org: PropTypes.string,
    period: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

const Home = () => {
  useEffect(() => {
    document.title = `${site.name} | Full-Stack Developer (PHP / Laravel)`;
  }, []);

  const currentStudies = caseStudies.filter((study) => study.role === "current");
  const policeStudies = caseStudies.filter((study) => study.role === "police");

  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {site.availability}
            </p>
            <h1>
              Full-stack developer building <em>production Laravel</em>{" "}
              systems.
            </h1>
            <p className="hero-lead">
              I work test-first on a B2B billing platform and an elder-care IoT
              product that handles sensitive personal data. I came to software
              from 18 years in the Hellenic Police, where I built internal
              tools that officers use every day.
            </p>
            <div className="hero-actions">
              <a className="button" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                Email me
              </a>
              <a
                className="button button-ghost"
                href={site.linkedin}
                target="_blank"
                rel="noopener"
              >
                <Icon name="linkedin" />
                LinkedIn
              </a>
            </div>
          </div>

          <dl className="hero-card">
            <div>
              <dt>Role</dt>
              <dd>{site.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{site.focus}</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Working</dt>
              <dd>Remote · {site.hours}</dd>
            </div>
            <div>
              <dt>Links</dt>
              <dd className="hero-card-links">
                <a href={site.github} target="_blank" rel="noopener">
                  <Icon name="github" size={16} /> GitHub
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener">
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="container">
          <ul className="stats">
            {stats.map((stat) => (
              <li key={stat.value}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Systems people depend on"
            intro="Production work where billing, alerts and personal data have to be right, and the self-started tools that got me here."
          />

          <RoleHeader role={currentRole} />
          {currentStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}

          <RoleHeader role={policeRole} />
          {policeStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Projects"
            title="More things I've built"
            intro="Automation that runs every day, side projects, and a lesson that learners now use."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div>
            <SectionHeading index="03" eyebrow="About" title="A second career, on purpose" />
            <div className="about-copy">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="principles" aria-label="How I work">
            <p className="eyebrow">How I work</p>
            <ol>
              {principles.map((principle) => (
                <li key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>
                    <Emphasis text={principle.text} />
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section section-alt" id="skills">
        <div className="container">
          <SectionHeading index="04" eyebrow="Skills" title="Toolbox" />
          <dl className="skills-grid">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <dt>{group.group}</dt>
                <dd>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">
            <span className="eyebrow-index">05</span> Contact
          </p>
          <h2>Hiring for a remote PHP / Laravel or full-stack role?</h2>
          <p className="contact-lead">
            I&apos;m looking for a full-time remote position with a team that
            reviews code and cares about tests. Email is the fastest way to
            reach me, and I&apos;ll send my current CV on request.
          </p>
          <div className="hero-actions contact-actions">
            <a className="button" href={`mailto:${site.email}`}>
              <Icon name="mail" />
              {site.email}
            </a>
            <a
              className="button button-ghost"
              href={site.linkedin}
              target="_blank"
              rel="noopener"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
          <ul className="contact-meta">
            <li>
              <Icon name="pin" size={16} /> {site.location} · {site.hours}
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener">
                <Icon name="github" size={16} /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
