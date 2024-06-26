import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  
  const [menu, setMenu] = useState(false)

  console.log(menu)

  return (
    <header 
      className={`
        ${styles.header} 
        ${menu ? styles.showMenu : styles.hideMenu}`
      }
    >
      <nav className={styles.headerItens}>
        <div className={styles.leftItens}>
          <i 
            class="fa-solid fa-bars"
            onClick={() => setMenu(!menu)}
          ></i>
          <hr className={styles.line}/>
          <div 
            className={styles.pageSections}
          >
            <span className={styles.mainSection}>Início</span>
            <span 
              className={styles.otherSections} 
              style={{opacity: !menu ? "0" : "1", cursor: !menu ? "default" : "pointer"}}>
              Sobre Mim
            </span>
            <span 
              className={styles.otherSections} 
              style={{opacity: !menu ? "0" : "1", cursor: !menu ? "default" : "pointer"}}>
              Projetos
            </span>
          </div>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;