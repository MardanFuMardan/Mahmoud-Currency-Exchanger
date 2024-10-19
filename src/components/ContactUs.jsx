import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline'; 

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-[#e9ecef] dark:bg-[#2a2d34] p-8"
    >
      <h2 className="text-4xl font-bold text-dark-neutral800 dark:text-light-neutral100 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-dark-neutral600 dark:text-light-neutral300 mb-4">
        For any inquiries, please email us at:
      </p>
      
      <div className="flex items-center space-x-2">
        <EnvelopeIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" /> {/* أيقونة البريد الإلكتروني */}
        <a href="mailto:mahmudhegazy007@gmail.com" className="text-blue-500 dark:text-blue-400 underline">
          mahmudhegazy007@gmail.com
        </a>
      </div>

      <footer className="mt-8 text-sm text-dark-neutral500 dark:text-light-neutral400">
        © 2024 Mahmoud Currency Exchanger. All rights reserved.
      </footer>
    </section>
  );
};

export default ContactUs;
