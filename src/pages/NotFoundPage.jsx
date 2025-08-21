import "../styles/NotFoundPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
      </div>
      <div className="return-home">
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
