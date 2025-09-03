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
        <DropdownBox title="Fiabilité" />
        <DropdownBox title="Respect" />
        <DropdownBox title="Service" />
        <DropdownBox title="Sécurité" />
      </div>
    </>
  );
}

export default AboutPage;
