import "./Footer.css";
import Logo from "../Logo/Logo.jsx";
function Footer() {
  return (
    <footer className="footer">
      <Logo className="logo-footer" fillColor="var(--color-2)" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
