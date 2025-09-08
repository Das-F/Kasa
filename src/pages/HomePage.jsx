import "../styles/Homepage.css";
import Card from "../components/HomePage/Card.jsx";
import HomepageImg from "../assets/images/Image-home-Kasa.png";
import Banner from "@/components/Banner";

function HomePage() {
  return (
    <>
      <Banner image={HomepageImg}>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="cards-list">
        <Card />
      </div>
    </>
  );
}

export default HomePage;
