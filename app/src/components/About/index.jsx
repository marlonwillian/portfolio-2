import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <span>Desde 2022, venho me dedicando ao estudo de programação, focado no desenvolvimento front-end, utilizando as tecnologias HTML, CSS, Java Script e React JS e outras com um conhecimento mais básico. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas, e no momento, sem experiência profissional.</span>
        <div className={styles.allTecnologies}>
          <hr/>
          <div>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-python"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;