import "./DropdownArrow.css";

function Arrow({ className = "" }) {
  return <img src="/images/Vector.svg" alt="déplier le menu" className={`dropdown-arrow ${className}`.trim()} />;
}

export default Arrow;
