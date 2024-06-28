import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({section, scrollY}) {

  const [menu, setMenu] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = {
    "Início": ["Sobre Mim", "Projetos"],
    "Sobre Mim": ["Início", "Projetos"],
    "Projetos": ["Início", "Sobre Mim"],
  }

  return (
    <header
      className={`
        ${styles.header} 
        ${menu ? styles.showMenu : styles.hideMenu}`
      }
      style={{
        flexDirection: windowSize.width <= 460 && menu? "column" : "",
        height: windowSize.width <= 460 && menu? "225px" : "",
        alignItems: windowSize.width <= 460 && menu ? "center" : ""
      }}
    >
      <nav 
        className={styles.leftItens}
        style={{
          marginLeft: windowSize.width <= 460 && menu? "0px" : "",
        }}
      >
        <i
          class="fa-solid fa-bars"
          onClick={() => setMenu(!menu)}
        ></i>
        <hr className={styles.line}/>
        <div
          className={styles.pageSections}
        >
          <span 
            className={`
              ${styles.mainSection} 
              ${scrollY == 400 || scrollY == 729 ? 
                styles.up :  ""
              }
            `}
          >
            { section }
          </span>
          <span
            className={styles.otherSections}
            style={{ opacity: !menu ? "0" : "1", cursor: !menu ? "default" : "pointer" }}>
            { sections[section][0] }
          </span>
          <span
            className={styles.otherSections}
            style={{ opacity: !menu ? "0" : "1", cursor: !menu ? "default" : "pointer" }}>
            { sections[section][1] }
          </span>
        </div>
      </nav>
      <nav
        className={styles.rightItens}
        style={{ 
          marginTop: 
          menu && windowSize.width > 460? "45px" : 
          !menu && windowSize.width > 460? "0px": 
          !menu && windowSize.width <= 460? "0px": 
          menu && windowSize.width <= 460 && windowSize.height <= 650 ? "0px" : "0px", 
          marginLeft: windowSize.width <= 460 && menu? "0px" : "",
          marginRight: windowSize.width <= 460 && menu? "0px" : "",
          marginBottom: menu && windowSize.width <= 460 && windowSize.height <= 650 ? "20px" : "20px", 
        }}
      >
        <a href="https://github.com/marlonwillian" target="blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/marlon-willian-silva-barros-30b49122b/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/marlonw___/" target="blank"><i class="fa-brands fa-instagram"></i></a>
      </nav>
    </header>
  );
}

export default Header;