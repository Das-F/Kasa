import "../styles/NotFoundPage.css";

import CodeError from "../components/NotFoundPage/CodeError.jsx";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="not-found">
        <CodeError className="code-error" alt="Error 404" fillColor="#FF6060" />
        <h1>
          Oups! La page que <br />
          vous demandez n'existe pas.
        </h1>
      </div>
      <div className="return-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
