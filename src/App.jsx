import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Vision from './components/Vision';
import Team from './components/Team';
import Footer from './components/Footer';
import SkillMatrix from './demo/SkillMatrix';
import HRDashboard from './components/HRDashboard';
import Contact from './components/Contact';
import Internship from './components/Internship';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/internship" element={<Internship />} />
        <Route path="/" element={
          <main>
            <section id="hero">
              <Hero />
            </section>
            <section id="vision">
              <Vision />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="hrDashboard">
              <HRDashboard />
            </section>
            <section id="skillMatrix">
              <SkillMatrix />
            </section>
            <section id="founder">
              <Team />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
