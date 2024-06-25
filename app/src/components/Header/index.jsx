import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerItens}>
        <div className={styles.leftItens}>
          <i class="fa-solid fa-bars"></i>
          <hr className={styles.line}/>
          <span>Início</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;