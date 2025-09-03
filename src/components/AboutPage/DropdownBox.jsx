import "./DropdownBox.css";
import DropdownArrow from "./DropdownArrow.jsx";

function DropdownBox(props) {
  return (
    <div className="dropdown-box">
      <h1>{props.title}</h1>
      <DropdownArrow />
    </div>
  );
}
export default DropdownBox;
