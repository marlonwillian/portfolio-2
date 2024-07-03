import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutText}>
        <span>Desde 2022, venho me dedicando ao estudo de programação, focado no desenvolvimento front-end, utilizando as tecnologias HTML, CSS, Java Script e React JS e outras com um conhecimento mais básico. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas, e no momento, sem experiência profissional.</span>
      </div>
      <section className={styles.rightAbout}>
        <div className={styles.aboutCourses}>
          <h1>Cursos Extracurriculares</h1>
          <hr/>
          <div className={styles.course}>
            <div className={styles.courseInfo}>
              <h2>Nome do Curso</h2>
              <h3>Empresa</h3>
              <h4>tecnologia aprendida</h4>
            </div>
            <div className={styles.divButton}>
              <button className={styles.certificateButton}>
                <span>Certificado</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>
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
      </section>
    </div>
  );
}

export default About;