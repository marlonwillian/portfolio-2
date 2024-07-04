import { useState } from "react";
import styles from "./Projects.module.css";
import img from "./img/lojadejogos.png"

function Projects() {
  const [tab, setTab] = useState(1);

  return (
    <section className={styles.projects}>
      <div className={styles.divCards}>
        <div className={styles.projectCard}>
          <div className={styles.cardImg}>
            <img src={img} alt="imagem do projeto"/>
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
              style={{display: tab == 1 ? "block" : "none"}}
            >
              <h1>Nome do Projeto <span>2024</span></h1>
              <h2>lista de tecnologias</h2>
              <a href="">
                <span className={styles.github}>
                  <i class="fa-brands fa-square-github"></i> Ver no Github
                </span>
              </a>
              <a href="">
                <span className={styles.site}>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Ir para o site
                </span>
              </a>
            </div>
            <div 
              className={styles.description}
              style={{display: tab == 2 ? "block" : "none"}}
            >
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore, eveniet esse est alias quos vel modi consectetur commodi ipsum ea perspiciatis architecto qui veniam non rem corporis facilis explicabo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;