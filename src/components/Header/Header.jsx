import "./Header.css";
import Logo from "../Logo/Logo.jsx";
import Navigation from "./Navigation.jsx";

function Header() {
  return (
    <header className="header">
      <Logo className="logo-header" alt="Kasa" fillColor="#FF6060" />
      <Navigation />
    </header>
  );
}
export default Header;
