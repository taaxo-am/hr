import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Subscribe from "./components/Subscribe";
import Form from "./components/Form";

import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <div className="bg-warning">
      <Navbar />
      <Hero />
      <About />
      <Form />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
