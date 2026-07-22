import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import SkillCards from "./components/SkillCards";
import Projects from "./components/Projects";
import "./index.css";
function App() {
  return (
    <>
      <div className="conteiner-fluid">
        <div className="">
          <Navbar />
        </div>
        <div className="mb-3">
          <Hero />
        </div>
        <div className="mb-3">
          <About />
        </div>
        <div className="mb-3">
          <SkillCards />
        </div>
        <hr className="section-divider mb-3" />
        <div className="mb-3">
          <Projects />
        </div>
        <div className="mb-3">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
