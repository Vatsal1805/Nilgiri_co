import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Restaurant from './components/Restaurant';
import Banquet from './components/Banquet';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
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
