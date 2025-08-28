import "../styles/Rental.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Announces from "../components/HomePage/Announces.jsx";

function RentalPage() {
  return (
    <>
      <Header />
      <div className="rental">
        <Announces />
      </div>
      <Footer />
    </>
  );
}

export default RentalPage;
