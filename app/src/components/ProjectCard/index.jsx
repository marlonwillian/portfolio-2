import styles from "./ProjectCard.module.css";
import { useState } from "react";

function ProjectCard({ img, project, year, tecnologies, github, site, description }) {
  const [tab, setTab] = useState(1);

  return (
    <div className={styles.projectCard}>
      <div className={styles.cardImg}>
        <img src={img} alt="imagem do projeto" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.tabs}>
          <span
            className={`
              ${styles.tab1} 
              ${tab == 1 ? styles.selectedTab : ""}
              ${tab == 2 ? styles.tabAnimation : ""}
            `}
            onClick={() => setTab(1)}
          >
            Informações
          </span>
          <span
            className={`
              ${styles.tab2} 
              ${tab == 2 ? styles.selectedTab : ""}
              ${tab == 1 ? styles.tabAnimation : ""}
            `}
            onClick={() => setTab(2)}
          >
            Descrição
          </span>
        </div>
        <div
          className={styles.informations}
          style={{ display: tab == 1 ? "block" : "none" }}
        >
          <h1>{project}<span>{year}</span></h1>
          <h2>
            {
              tecnologies.map((tecnology, index) =>
                <span
                  className={styles.tecnology}
                  style={{ marginLeft: index == 0 ? "0px" : "" }}
                >
                  {tecnology}
                </span>
              )
            }
          </h2>
          <a href={github} target="blank">
            <span className={styles.github}>
              <i class="fa-brands fa-square-github"></i> Ver o repositório
            </span>
          </a>
          <a href={site} target="blank">
            <span className={styles.site}>
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Ir para o site
            </span>
          </a>
        </div>
        <div
          className={styles.description}
          style={{ display: tab == 2 ? "block" : "none" }}
        >
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;