import "../styles/AboutPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import DropdownBox from "../components/AboutPage/DropdownBox.jsx";
import DropdownArrow from "../components/AboutPage/DropdownArrow.jsx";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-banner">
          <img src="/public/images/image-about-Kasa.png" alt="about Kasa" className="about-image" />
        </div>
        <DropdownBox />
        <h1 className="about-title">Fiabilité</h1>
        <DropdownBox />
        <DropdownBox />
        <DropdownBox />
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
