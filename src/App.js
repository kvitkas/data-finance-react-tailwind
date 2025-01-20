import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;