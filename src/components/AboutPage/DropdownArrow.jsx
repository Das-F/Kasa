import "./DropdownArrow.css";
import ArrowIcon from "../../assets/images/Vector.svg";

function Arrow({ className = "" }) {
  return <img src={ArrowIcon} alt="déplier le menu" className={`dropdown-arrow ${className}`.trim()} />;
}

export default Arrow;
