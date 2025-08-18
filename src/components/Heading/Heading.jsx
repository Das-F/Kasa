import "./Heading.css";
export default function Heading() {
  return (
    <header className="heading">
      <img className="logo-header" src="./src/assets/Logo-header.svg" alt="Kasa" />
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

      <h1 className="heading-title">Chez vous, partout et ailleurs</h1>
    </header>
  );
}
