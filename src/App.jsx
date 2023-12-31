import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PersonalDetails from "./components/PersonalDetails";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import BlogB from "./components/BlogB" ;
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <PersonalDetails />
      <About />
      <Portfolio />
      <Blog />
      <BlogB />
      <Contact />
      <ContactDetails />
      <Footer />
    </>
  );
}

export default App;
