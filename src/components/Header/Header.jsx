import "./Header.css";
import Logo from "../Logo/Logo.jsx";
function Header() {
  return (
    <header className="header">
      <Logo className="logo-header" alt="Kasa" fillColor="#FF6060" />
      <nav className="nav">
        <ul>
          <li>
            <a className="home" href="#">
              Accueil
            </a>
          </li>
          <li>
            <a className="about" href="#">
              À propos
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="header-title">Chez vous, partout et ailleurs</h1>
    </header>
  );
}
export default Header;
