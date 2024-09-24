import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-200 text-black">RAVI KARMKAR</h1>
      <br />
      <br />
      <Card username="Rohan" clicked="Checkout Me" />
      <br />
      <Card username="Sohan" clicked="About Me" />
    </>
  );
}

export default App;
