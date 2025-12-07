import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GradientDivider } from './components/GradientDivider';
import { WeatherAppDetails } from './components/WeatherAppDetails';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path for routing
    const path = window.location.pathname;
    if (path === '/weather-app') {
      setCurrentPage('weather-app');
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/weather-app') {
        setCurrentPage('weather-app');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPage === 'weather-app') {
    return <WeatherAppDetails />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <HeroSection />
        <GradientDivider />
        <About />
        <GradientDivider />
        <Experience />
        <GradientDivider />
        <Skills />
        <GradientDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;