import "../styles/Homepage.css";
import Card from "../components/HomePage/Card.jsx";

function HomePage() {
  return (
    <>
      <div className="banner" style={{ backgroundImage: 'url("/images/Image-home-Kasa.png")' }}>
        <h1 className="banner-title">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
      <div className="cards-list">
        <Card />
      </div>
    </>
  );
}

export default HomePage;
