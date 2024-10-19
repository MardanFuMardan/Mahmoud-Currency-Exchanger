import React from 'react';
import backgroundImage from '../assets/hero-background.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay باللون المناسب للدارك واللايت مود */}
      <div className="absolute inset-0 bg-light-neutral400 dark:bg-dark-neutral400 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md"></div> {/* التأثيرات على الخلفية */}
      
      <div className="relative p-6 text-center">
        <h1 className="text-5xl font-bold text-dark-neutral200 dark:text-light-neutral200">
          Mahmoud Currency Exchanger
        </h1>
        <p className="text-lg mt-4 text-dark-neutral300 dark:text-light-neutral300">
          The best way to exchange currency online with real-time rates.
        </p>
      </div>
    </section>
  );
};

export default Hero;
