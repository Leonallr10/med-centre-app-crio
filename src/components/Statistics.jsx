import React from 'react';
import '../styles/Statistics.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: '👨‍⚕️',
      count: '5000+',
      label: 'Happy Patients',
      color: '#e0f2fe',
      iconColor: '#0ea5e9'
    },
    {
      id: 2,
      icon: '📊',
      count: '200+',
      label: 'Surgeries',
      color: '#fef2f2',
      iconColor: '#ef4444'
    },
    {
      id: 3,
      icon: '🏆',
      count: '1000+',
      label: 'Awards',
      color: '#fffbeb',
      iconColor: '#f59e0b'
    },
    {
      id: 4,
      icon: '👩‍⚕️',
      count: '700+',
      label: 'Expert Doctors',
      color: '#ecfdf5',
      iconColor: '#10b981'
    }
  ];

  return (
    <div className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-content">
          <div className="section-tag">
            <span className="tag-icon">📈</span>
            <span className="tag-text">Our Achievements</span>
          </div>
          
          <h2 className="section-title">Our Families</h2>
          
          <p className="section-description">
            We all work with you to build a relationship that lasts. 
            We're committed to providing the highest quality of care to our patients. 
            Our team consists of highly qualified doctors who are dedicated to 
            your health. We offer services across all medical specialties with the 
            latest technology.
          </p>
        </div>
        
        <div className="stats-cards">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="stat-card"
              style={{ backgroundColor: stat.color }}
            >
              <div 
                className="stat-icon"
                style={{ color: stat.iconColor }}
              >
                {stat.icon}
              </div>
              <div className="stat-count">{stat.count}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
