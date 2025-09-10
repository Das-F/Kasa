import "./DropdownArrow.css";
import ArrowIcon from "../../assets/images/Vector.svg";

function Arrow({ className = "", onClick }) {
  return <img src={ArrowIcon} alt="déplier le menu" className={`dropdown-arrow ${className}`.trim()} onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }} />;
}

export default Arrow;
