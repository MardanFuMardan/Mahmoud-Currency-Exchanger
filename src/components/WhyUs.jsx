import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // استيراد الأيقونة

const WhyUs = () => {
  return (
    <section id="why-us" className="h-screen flex flex-col justify-center items-center bg-light-neutral100 dark:bg-dark-neutral200 p-8">
      {/* تعديل هنا لتوسيط العنوان في الشاشات الصغيرة */}
      <h2 className="text-4xl font-bold text-center md:text-left text-dark-neutral800 dark:text-light-neutral100 mb-6">
        Why Use Mahmoud Currency Exchanger?
      </h2>

      {/* النقاط مع الأيقونات */}
      <ul className="max-w-2xl text-lg text-dark-neutral600 dark:text-light-neutral300 space-y-4">
        {[
          "Accurate and up-to-date exchange rates.",
          "Easy-to-use interface for all users.",
          "Secure and reliable currency conversions.",
          "Supports multiple currencies worldwide.",
          "Real-time currency rate updates.",
          "Free to use with no hidden fees.",
          "Accessible from any device, anywhere.",
          "Trusted by thousands of users globally."
        ].map((point, index) => (
          <li key={index} className="flex items-center">
            {/* أيقونة بجانب كل نقطة */}
            <CheckCircleIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
