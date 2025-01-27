import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import "./LandingPage.css";
const LandingPage = () => {
  const projects = projectData.map((project) => (
    <ProjectCard key={project.title} project={project} />
  ));
  return (
    <main>
      <section className="hero">
        <h1>Nikos Emmanoulidis</h1>
        <article>
          <h2>Hello, World.</h2>
          <p>
            I&apos;m a web developer, located in Komotini, Greece, .
            Problem-solving enjoyer, open to learning new tech, available for
            work!
          </p>
        </article>
      </section>
      <fieldset>
        <legend>Tech stack</legend>
        <section className="tech">
          <p className="ruby">Ruby</p> <p className="ruby">Ruby on Rails</p>
          <p className="javascript">JavaScript</p>{" "}
          <p className="react">React</p>
        </section>
      </fieldset>

      <fieldset>
        <legend>My projects</legend>
        <section className="projects">{projects}</section>
      </fieldset>
    </main>
  );
};
export default LandingPage;
