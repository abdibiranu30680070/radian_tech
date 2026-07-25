import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Portfolio } from './components/Portfolio';
import { Technologies } from './components/Technologies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="min-h-screen min-w-0 overflow-x-clip flex flex-col">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
