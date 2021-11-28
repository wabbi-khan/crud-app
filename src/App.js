import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
