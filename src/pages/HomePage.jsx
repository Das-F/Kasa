import "../styles/Homepage.css";
import Card from "../components/HomePage/Card.jsx";
import HomepageImg from "../assets/images/Image-home-Kasa.png";
import Banner from "@/components/Banner";

function HomePage() {
  return (
    <>
      <Banner image={HomepageImg} title={"Chez vous, partout et ailleurs"} className={"banner-dark"} />
      <div className="cards-list">
        <Card />
      </div>
    </>
  );
}

export default HomePage;
