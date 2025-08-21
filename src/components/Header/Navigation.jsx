import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/"></NavLink>
        <li className="home">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">À propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
