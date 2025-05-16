import React from 'react';
import '../styles/Specializations.css';

const Specializations = () => {
  const specializations = [
    { name: 'Dentistry', icon: '🏥' },
    { name: 'Primary Care', icon: '⚕️' },
    { name: 'Cardiology', icon: '❤️' },
    { name: 'MRI Resonance', icon: '📊' },
    { name: 'Blood Test', icon: '💉' },
    { name: 'Oncologist', icon: '🛡️' },
    { name: 'Laboratory', icon: '🏥' },
    { name: 'X-Ray', icon: '📷' },
  ];

  return (
    <div className="specializations-container">
      <h2 className="specializations-title">Find By Specialisation</h2>
      <div className="specialization-cards">
        {specializations.map((spec, index) => (
          <div key={index} className="specialization-card">
            <div className="specialization-icon">{spec.icon}</div>
            <p className="specialization-name">{spec.name}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All</button>
    </div>
  );
};

export default Specializations;
