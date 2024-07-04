import styles from "./Start.module.css";
import euhd from "./img/eu-hd.png";

function Start() {
  return (
    <section className={styles.start}>
      <div className={styles.divImg}>
        <img src={euhd} alt="marlon foto" className={styles.img1} />
        <img src={euhd} alt="marlon foto" className={styles.img2} />
      </div>
      <div className={styles.divInfo}>
        <h1>Marlon Willian Silva Barros</h1>
        <h3>Desenvolvedor Front-End</h3>
        <hr/>
        <h4>Principais Tecnologias</h4>
        <div className={styles.tecnologies}>
          <span><i class="fa-brands fa-html5" style={{ color: "#d24c28" }}></i>HTML 5</span>
          <span><i class="fa-brands fa-css3" style={{ color: "#2d53e5" }}></i>CSS3</span>
          <span><i class="fa-brands fa-js" style={{ color: "#f0dc55" }}></i>Java Script</span>
          <span><i class="fa-brands fa-react" style={{ color: "#66dbfb" }}></i>React JS</span>
        </div>
      </div>
    </section>
  );
}

export default Start;