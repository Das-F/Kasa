import "./Navigation.css";

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className={currentPage === "home" ? "home selected" : "home"} onClick={() => setCurrentPage("home")}>
            Accueil
          </a>
        </li>
        <li>
          <a className={currentPage === "about" ? "about selected" : "about"} onClick={() => setCurrentPage("about")}>
            À propos
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
