import { useState } from "react";
import "./App.css";
import Heading from "../Heading.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
