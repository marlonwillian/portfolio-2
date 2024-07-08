import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftItems}>
        <span>Marlon Barros</span>
        <hr/> 
        <span>2024</span>
      </div>
      <a href="#">
        <div className={styles.rightItems}>
          <i class="fa-solid fa-arrow-up"></i>
          <span>Início</span>
        </div>
      </a>
    </footer>
  );
}

export default Footer;