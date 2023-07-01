import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PersonalDetails from "./components/PersonalDetails";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <PersonalDetails />
      <About />
      <Portfolio />
      <Blog />
      <Blog />
      <Blog />
    </>
  );
}

export default App;
