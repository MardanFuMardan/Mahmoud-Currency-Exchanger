import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrencyConverter from './components/CurrencyConverter';
import MultiCurrencyConverter from './components/MultiCurrencyConverter';
import WhatIsCurrencyConverter from './components/WhatIsCurrencyConverter';
import WhyUs from './components/WhyUs';
import ContactUs from './components/ContactUs';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main className="bg-light-background dark:bg-dark-background text-gray-900 dark:text-white">
        <Hero />
        <CurrencyConverter />
        <MultiCurrencyConverter />
        <WhatIsCurrencyConverter />
        <WhyUs />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
