import React from "react";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
// import Services from "./components/Services";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
