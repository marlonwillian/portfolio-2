import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.divCards}>
        <div className={styles.projectCard}>
          <div className={styles.cardImg}>
            
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.tabs}>
              <span className={styles.tab1}>Ir para</span>
              <span className={styles.tab2}>Descrição</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;