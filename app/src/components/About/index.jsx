import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="Sobre Mim">
      <div className={styles.aboutText}>
        <span>Desde 2022, venho me dedicando ao estudo de programação,no desenvolvimento front-end, utilizando tecnologias como HTML, CSS, JavaScript, React e NextJS com principais. Além disso, possuo conhecimentos básicos no Back-End, com NodeJS, SQL e MongoDB.</span>
        <div className={styles.allTecnologies}>
          <hr/>
          <div className={styles.tecnologiesLogo}>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-node-js"></i>
            <div><i class="fa-solid fa-database"></i><span>SQL | MongoDB</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;