import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PersonalDetails from "./components/PersonalDetails";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PersonalDetails />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
