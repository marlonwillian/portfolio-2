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
    if (scrollY < 400 ) {
      return "Início"
    } else if (scrollY >= 400 && scrollY < 729) {
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
            <img src={eu} alt="eu"/>
          </div>
          <div className={styles.divInfo}>
            <span>Marlon Willian Silva Barros</span>
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