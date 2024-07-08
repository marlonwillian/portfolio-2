import Header from "../../components/Header";
import Container from "../../components/Container";
import Start from "../../components/Start";
import About from "../../components/About";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Projects from "../../components/Projects";

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
    } else if (scrollY >= 700 && scrollY < 1600) {
      return "Sobre Mim"
    } else {
      return "Projetos"
    }
  };

  console.log(scrollY)

  let section = getSections();

  return (
    <section className={styles.homeSection}>
      <Header section={section} scrollY={scrollY}/>
      <Container>
        <Start/>
        <About/>
        <Projects/>
      </Container>
      <Footer />
    </section>
  )
}

export default Home;