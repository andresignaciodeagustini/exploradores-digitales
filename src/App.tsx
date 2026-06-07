import "./App.css";
import "./styles/Responsive.css";


import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Events from "./sections/Events";
import AgeGroups from "./sections/AgeGroups";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Events />
      <AgeGroups />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;