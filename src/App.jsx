import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Restaurant from './components/Restaurant';
import Banquet from './components/Banquet';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useLenis from './hooks/useLenis';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useLenis();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Restaurant />
        <Banquet />
        <Stats />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
