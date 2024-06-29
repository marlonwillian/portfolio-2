import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import eu from "./img/eu.png";
import { useEffect, useState } from "react";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(parseInt(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function getSections() {
    if (scrollY < 700 ) {
      return "Início"
    } else if (scrollY >= 700 && scrollY < 1400) {
      return "Sobre Mim"
    } else {
      return "Projetos"
    }
  };

  let section = getSections();

  return (
    <section className={styles.homeSection}>
      <Header section={section} scrollY={scrollY}/>
      <Container>
        <div className={styles.start}>
          <div className={styles.divImg}>
            <img src={eu} alt="marlon foto" className={styles.img1}/>
            <img src={eu} alt="marlon foto" className={styles.img2}/>
          </div>
          <div className={styles.divInfo}>
            <h1>Marlon Willian Silva Barros</h1>
            <h3>Front-End Developer</h3>
            <hr/>
            <h4>Principais Tecnologias</h4>
            <div className={styles.tecnologies}>
              <span><i class="fa-brands fa-html5" style={{color: "#d24c28"}}></i>HTML 5</span>
              <span><i class="fa-brands fa-css3" style={{color: "#2d53e5"}}></i>CSS3</span>
              <span><i class="fa-brands fa-js" style={{color: "#f0dc55"}}></i>Java Script</span>
              <span><i class="fa-brands fa-react" style={{color: "#66dbfb"}}></i>React JS</span>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <span>Sobre Mim</span>
        </div>
        <div className={styles.projects}>
          <span>Projetos</span>
        </div>
      </Container>
      <Footer />
    </section>
  )
}

export default Home;