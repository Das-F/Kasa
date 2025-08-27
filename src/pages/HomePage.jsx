import "../styles/Homepage.css";
import Header from "../components/Header/Header.jsx";
import Card from "../components/HomePage/Card.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div className="banner">
        <img src="/images/Image-home-Kasa.png" alt="Kasa Home" className="banner-image" />
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-list">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default HomePage;
