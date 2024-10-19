import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-[#e9ecef] dark:bg-[#2a2d34] p-8">
     <h2 className="text-4xl font-bold text-center md:text-left text-dark-neutral800 dark:text-light-neutral100 mb-6">
        What is a Currency Converter?
      </h2>
      <div className="max-w-3xl text-lg text-dark-neutral600 dark:text-light-neutral300 text-justify space-y-4 overflow-auto">
        <p>
          A currency converter is a tool that allows users to calculate the value of one currency in terms of another. Currency converters use up-to-date exchange rates, helping individuals, businesses, and financial professionals make accurate conversions. This tool is essential in a globalized economy where international transactions are common.
        </p>
        <h3 className="text-2xl font-semibold text-dark-neutral700 dark:text-light-neutral200 mb-4">How Do Currency Converters Work?</h3>
        <p>
          Currency converters function by applying real-time exchange rates from financial markets or institutions. The user selects a base currency and a target currency, enters the amount, and the converter multiplies the amount by the current exchange rate. The result provides the equivalent value in the target currency.
        </p>
        <h3 className="text-2xl font-semibold text-dark-neutral700 dark:text-light-neutral200 mb-4">Why Are Currency Converters Important?</h3>
        <p>
          Currency converters are essential for various purposes. They help travelers, international businesses, and Forex investors make informed decisions based on currency values. These tools provide accurate conversions, making international financial transactions easier and more transparent.
        </p>
      </div>
    </section>
  );
};

export default About;
