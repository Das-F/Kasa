import "../styles/AboutPage.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
