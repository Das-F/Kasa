import "../styles/NotFoundPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CodeError from "../components/NotFoundPage/CodeError.jsx";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found">
        <CodeError className="code-error" alt="Error 404" fillColor="#FF6060" />
        <h1>
          Oups! La page que <br />
          vous demandez n'existe pas.
        </h1>
      </div>
      <div className="return-home">
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
