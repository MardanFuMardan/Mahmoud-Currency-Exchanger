import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Flag from 'react-world-flags';
import { BookmarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline'; // استيراد أيقونات الحفظ والتحميل

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [favoritePair, setFavoritePair] = useState(null);

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

    // استرجاع زوج العملات المفضل من Local Storage
    const storedFavoritePair = JSON.parse(localStorage.getItem('favoritePair'));
    if (storedFavoritePair) {
      setFavoritePair(storedFavoritePair);
    }
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      setResult(amount * rate);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const saveFavoritePair = () => {
    const pair = { from: fromCurrency, to: toCurrency };
    setFavoritePair(pair);
    localStorage.setItem('favoritePair', JSON.stringify(pair)); // حفظ زوج العملات في Local Storage
  };

  const loadFavoritePair = () => {
    if (favoritePair) {
      setFromCurrency(favoritePair.from);
      setToCurrency(favoritePair.to);
      setResult(null); // لتصفير النتيجة عند تغيير الزوج
    }
  };

  // تخصيص تصميم القائمة المنسدلة
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: document.documentElement.classList.contains('dark') ? '#2a2d34' : '#f8f9fa',
      color: document.documentElement.classList.contains('dark') ? '#f1f1f1' : 'black',
      borderColor: '#ccc',
      boxShadow: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: document.documentElement.classList.contains('dark') ? '#2a2d34' : '#ffffff',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: document.documentElement.classList.contains('dark') ? '#f1f1f1' : 'black',
    }),
  };

  return (
    <section id="converter" className="h-screen bg-[#f8f9fa] dark:bg-[#2a2d34] flex flex-col justify-center items-center p-4 sm:p-8">
      <h2 className="text-4xl font-bold text-dark-neutral800 dark:text-light-neutral100 mb-6 text-center">
        Currency Converter
      </h2>
      <div className="p-8 bg-white dark:bg-[#2a2d34] rounded-lg shadow-md flex flex-col items-center space-y-4 w-full max-w-md">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 items-center w-full">
          <Select
            value={currencies.find(option => option.value === fromCurrency)}
            onChange={option => setFromCurrency(option.value)}
            options={currencies}
            className="w-full mb-4 sm:mb-0"
            styles={customStyles}
          />
          <button onClick={() => [setFromCurrency(toCurrency), setToCurrency(fromCurrency)]} className="p-2 border rounded-md bg-blue-500 text-white w-full sm:w-auto">
            ⇆
          </button>
          <Select
            value={currencies.find(option => option.value === toCurrency)}
            onChange={option => setToCurrency(option.value)}
            options={currencies}
            className="w-full mt-4 sm:mt-0"
            styles={customStyles}
          />
        </div>

        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="p-2 border rounded-md w-full bg-light-neutral100 dark:bg-dark-neutral400 text-dark-neutral700 dark:text-light-neutral100"
          placeholder="Enter amount"
        />

        <button onClick={convertCurrency} className="p-3 bg-blue-500 text-white rounded-lg w-full">
          Convert
        </button>

        {result && (
          <p className="text-lg text-dark-neutral800 dark:text-light-neutral200">
            Result: {result.toFixed(2)}
          </p>
        )}

        {/* الأزرار على الجانبين */}
        <div className="flex justify-between w-full mt-4">
          {/* زر حفظ زوج العملات */}
          <button onClick={saveFavoritePair} className="p-2 bg-green-500 text-white rounded-lg flex items-center">
            <BookmarkIcon className="h-5 w-5 mr-2" />
            Save Favorite Pair
          </button>

          {/* زر تحميل زوج العملات المحفوظ */}
          <button onClick={loadFavoritePair} className="p-2 bg-yellow-500 text-white rounded-lg flex items-center">
            <ArrowPathIcon className="h-5 w-5 mr-2" />
            Load Favorite Pair
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
