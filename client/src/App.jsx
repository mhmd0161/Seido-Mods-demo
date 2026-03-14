import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import InstagramCTA from './components/InstagramCTA';
import Footer from './components/Footer';

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Process />
        <About />
        <InstagramCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
