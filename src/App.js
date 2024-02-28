import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //https://script.google.com/macros/s/AKfycbyXzd43Ze7RNpspcr9cALF1VF7gAnevyFNfu-84iF3XcydSMZUl67NeOfpEz7YBJdI/exec
  return (
    <div className="bg">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
