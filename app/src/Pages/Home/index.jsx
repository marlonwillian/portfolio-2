import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.homeSection}>
      <Header/>
      <Container>
        {/* conteúdo */}
      </Container>
      <Footer/>
    </section>
  )
}

export default Home;