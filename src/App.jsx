import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Analysis from './components/Analysis';
import Vision from './components/Vision';
import Team from './components/Team';
import Time from './components/Time';
import Footer from './components/Footer';
import SkillMatrix from './demo/SkillMatrix';
import HRDashboard from './components/HRDashboard';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Header />
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
          <Contact Us />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
