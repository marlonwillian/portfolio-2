import styles from "./Projects.module.css";
import project from "../../json/projects.json";
import ProjectCard from "../ProjectCard";
 
function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.divCards}>
        {
          project.map((project) => 
            <ProjectCard
              img={project.img}
              project={project.project}
              year={project.year}
              tecnologies={project.tecnologies}
              github={project.github}
              site={project.site}
              description={project.description}
            />
          )
        }
      </div>
    </section>
  );
}

export default Projects;