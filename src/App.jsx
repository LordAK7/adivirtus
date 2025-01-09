import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Info from './components/Info';
import Analysis from './components/Analysis';
import Vision from './components/Vision';
import Team from './components/Team';
import Time from './components/Time';
import Footer from './components/Footer';
import Resource from './components/Resource';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="info">
          <Info />
        </section>
        <section id="analysis">
          <Analysis />
        </section>
        <section id="vision">
          <Vision />

          <section id="resource">
          <Resource />
        </section>

        </section>
        <section id="team">
          <Team />
        </section>
        <section id="time">
          <Time />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
