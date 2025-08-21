import "../styles/AboutPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about">
        <h1>À propos</h1>
        <p>Bienvenue sur la page à propos de notre site.</p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
