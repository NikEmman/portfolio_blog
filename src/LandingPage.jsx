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
        <h2>Hello, World.</h2>
        <p>
          My name is Nikos Emmanouilidis, a full-stack web developer.
          Problem-solving enjoyer, open to learning new tech, available for
          work!
        </p>
      </section>
      <fieldset>
        <legend>Tech stack</legend>
        <section className="tech">
          <p className="ruby">Ruby</p> <p className="ruby">Ruby on Rails</p>
          <p className="javascript">JavaScript</p>{" "}
          <p className="react">React</p>
        </section>
      </fieldset>
      <section className="projects">{projects}</section>
    </main>
  );
};
export default LandingPage;
