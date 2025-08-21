import "../styles/Homepage.css";
import Header from "../components/Header/Header.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div className="banner">
        <img src="/images/Image-home-Kasa.png" alt="Kasa Home" className="banner-image" />
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export default HomePage;
