import "../styles/Homepage.css";
import Card from "../components/HomePage/Card.jsx";
import HomepageImg from "../assets/images/Image-home-Kasa.png";

function HomePage() {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${HomepageImg})` }}>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-list">
        <Card />
      </div>
    </>
  );
}

export default HomePage;
