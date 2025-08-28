import "../styles/Homepage.css";
import Header from "../components/Header/Header.jsx";
import Card from "../components/HomePage/Card.jsx";
import Footer from "../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div className="banner" style={{ backgroundImage: 'url("/images/Image-home-Kasa.png")' }}>
        <h1 className="banner-title">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
      <div className="cards-list">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
