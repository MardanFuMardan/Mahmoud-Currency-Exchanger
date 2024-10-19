import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Flag from 'react-world-flags';

const MultiCurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [conversionResults, setConversionResults] = useState({});
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        const currencyOptions = Object.keys(response.data.rates).map(currency => ({
          value: currency,
          label: (
            <div className="flex items-center">
              <Flag code={currency.slice(0, 2)} alt={`${currency} flag`} width="20" />
              <span className="ml-2">{currency}</span>
            </div>
          ),
        }));
        setCurrencies(currencyOptions);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, []);

  const handleCurrencySelection = (selectedOptions) => {
    setSelectedCurrencies(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const convertMultipleCurrencies = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
      const results = {};
      selectedCurrencies.forEach((currency) => {
        results[currency] = response.data.rates[currency] * amount;
      });
      setConversionResults(results);
    } catch (error) {
      console.error('Error fetching conversion rates:', error);
    }
  };

  // تخصيص تصميم القائمة المنسدلة
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
      borderColor: state.isFocused ? '#ccc' : '#ddd',
      boxShadow: state.isFocused ? '0 0 0 1px #ddd' : 'none',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen ? (document.documentElement.classList.contains('dark') ? '#505357' : 'white') : 'white',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? (document.documentElement.classList.contains('dark') ? '#505357' : '#f0f0f0') : 'transparent',
      color: document.documentElement.classList.contains('dark') ? 'white' : 'black',
      '&:hover': {
        backgroundColor: document.documentElement.classList.contains('dark') ? '#505357' : '#e6e6e6',
      },
    }),
  };

  return (
    <section id="multi-converter" className="h-screen bg-light-neutral200 dark:bg-dark-neutral200 flex flex-col justify-center items-center p-4 sm:p-8">
      {/* توسيط العنوان في الشاشات الصغيرة */}
      <h2 className="text-4xl font-bold text-center md:text-left text-dark-neutral800 dark:text-light-neutral100 mb-6">
        Multi-Currency Conversion
      </h2>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center space-y-4 w-full max-w-md">
        <Select
          isMulti
          value={currencies.filter(option => selectedCurrencies.includes(option.value))}
          onChange={handleCurrencySelection}
          options={currencies}
          className="w-full"
          styles={customStyles} // استخدام التنسيق المخصص
        />
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="p-2 border rounded-md w-full bg-light-neutral100 dark:bg-dark-neutral400 text-dark-neutral700 dark:text-light-neutral100"
          placeholder="Enter amount"
        />
        <button onClick={convertMultipleCurrencies} className="p-3 bg-blue-500 text-white rounded-lg w-full">Convert</button>
        {Object.keys(conversionResults).length > 0 && (
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-dark-neutral800 dark:text-light-neutral200">Results:</h3>
            {Object.entries(conversionResults).map(([currency, value]) => (
              <p key={currency} className="text-lg text-dark-neutral800 dark:text-light-neutral200">
                {currency}: {value.toFixed(2)}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MultiCurrencyConverter;
