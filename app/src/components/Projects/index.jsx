import styles from "./Projects.module.css";
import project from "../../json/projects.json";
import ProjectCard from "../ProjectCard";
import Carousel from "../Carousel";

function Projects() {
  return (
    <section className={styles.projects} id="Projetos">
      <Carousel>
        {
          project.map((project) =>
            <ProjectCard
              img={project.img}
              project={project.project}
              year={project.year}
              tecnologies={project.tecnologies}
              description={project.description}
              github={project.github}
              site={project.site}
            />
          )
        }
      </Carousel>
    </section>
  );
}

export default Projects;