import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import CustomerJourney from './components/CustomerJourney';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SecondaryCTA from './components/SecondaryCTA';
import Footer from './components/Footer';
import { LanguageProvider } from './hooks/useLanguage';
import { useAnimations } from './hooks/useAnimations';

function App() {
  useAnimations(); // Initialize animations and interactions

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <UseCases />
        <HowItWorks />
        <CustomerJourney />
        <FAQ />
        <Contact />
        <SecondaryCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
