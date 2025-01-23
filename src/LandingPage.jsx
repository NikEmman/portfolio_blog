import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
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
      <section className="tech">
        <p className="ruby">Ruby</p> <p className="ruby">Ruby on Rails</p>
        <p className="javascript">JavaScript</p> <p className="react">React</p>
      </section>
      <section className="projects">{projects}</section>
      <div className="contact">
        <a href="mailto:nik.s.emman@gmail.com">Contact me</a>
      </div>
    </main>
  );
};
export default LandingPage;
