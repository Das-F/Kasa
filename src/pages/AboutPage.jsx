import "../styles/AboutPage.css";
import DropdownBox from "../components/AboutPage/DropdownBox.jsx";
import DropdownArrow from "../components/AboutPage/DropdownArrow.jsx";

function AboutPage() {
  return (
    <>
      <div className="about">
        <div className="about-banner">
          <img src="/images/image-about-Kasa.png" alt="about Kasa" className="about-image" />
        </div>
        <DropdownBox />
        <h1 className="about-title">Fiabilité</h1>
        <DropdownBox />
        <DropdownBox />
        <DropdownBox />
      </div>
    </>
  );
}

export default AboutPage;
