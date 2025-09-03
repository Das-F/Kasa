import "./Tag.css";

function Tag({ text, className = "" }) {
  return <span className={`tag ${className}`.trim()}>{text}</span>;
}

export default Tag;
