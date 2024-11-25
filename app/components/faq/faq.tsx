"use client"

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "How do I start online consultation with doctors on Medicare?",
    answer:
      "To start an online consultation, sign up or log in to your Medicare account, choose a specialty, and select a doctor to begin your session.",
  },
  {
    question: "Are your online doctors qualified?",
    answer:
      "Yes, all our online doctors are licensed and verified healthcare professionals with extensive experience in their respective fields.",
  },
  {
    question: "Is online doctor consultation safe and secured on Medicare?",
    answer:
      "Absolutely. Our platform uses end-to-end encryption to ensure all consultations and data are private and secure.",
  },
  {
    question: "What happens if I don't get a response from a doctor?",
    answer:
      "In the rare event that you don't receive a response, you can reach out to our support team for assistance or request a refund.",
  },
  {
    question: "What is the online doctor consultation?",
    answer:
      "Online doctor consultation is a virtual service where you can connect with licensed medical professionals for advice, diagnosis, and treatment.",
  },
  {
    question: "Can I do a free online doctor consultation on Medicare?",
    answer:
      "Yes, Medicare offers free consultation sessions for first-time users. Additional consultations may be charged based on the doctor and specialty.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="p-6 w-4/5 mx-auto text-secondary rounded-lg">
      <h1 className="text-4xl font-black mb-12 my-4 text-center">Got questions?</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`p-8 ${openIndex===index?"bg-[#9ee86f]":"bg-[#f2f4f9]"} rounded-3xl my-div`}>
            <button
              className="w-full text-left font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className='text-xl font-semibold'>{faq.question}</span>
              <span className="ml-2">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
