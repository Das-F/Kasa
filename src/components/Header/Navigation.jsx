import "./Navigation.css";

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className="home">Accueil</a>
        </li>
        <li>
          <a className="about">À propos</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
