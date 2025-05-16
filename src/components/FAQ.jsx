import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Why choose us a medical for your family?',
      answer: 'We provide comprehensive healthcare services with a focus on patient comfort and satisfaction. Our team of experienced doctors and state-of-the-art facilities ensure the highest quality of care for your family.'
    },
    {
      id: 2,
      question: 'What are the different types of care?',
      answer: 'We offer a wide range of care services including preventive care, diagnostic services, treatment for acute and chronic conditions, surgical procedures, rehabilitation, and follow-up care.'
    },
    {
      id: 3,
      question: 'Is telemedicine available year-round, even during holidays?',
      answer: 'Yes, our telemedicine services are available 24/7, 365 days a year, including holidays. We understand that medical needs do not take time off.'
    },
    {
      id: 4,
      question: 'How to get appointment for emergency?',
      answer: 'For emergencies, you can call our emergency hotline or use the emergency appointment feature in our app. We prioritize emergency cases and ensure immediate attention.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="section-tag">
            <span className="tag-icon">❓</span>
            <span className="tag-text">Common Questions</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-content">
          <div className="faq-image">
            <img
              src="https://img.freepik.com/free-photo/doctor-talking-elderly-patient_23-2148965941.jpg"
              alt="Doctor with Patient"
            />
            <div className="faq-image-tag">
              <span className="tag-emoji">💬</span>
              <span className="tag-text">FAQ's</span>
            </div>
          </div>

          <div className="accordion">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="accordion-title">{faq.question}</h3>
                  <span className="accordion-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
