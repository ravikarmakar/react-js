import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-blue-500">Currency App by JustCode</h1>
    </>
  );
}

export default App;
