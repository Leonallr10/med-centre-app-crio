import React, { useState } from 'react';
import '../styles/DoctorCarousel.css';

const DoctorCarousel = () => {
  const doctors = [
    {
      name: 'Dr. Ahmad Khan',
      specialty: 'Neurologist',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
    },
    {
      name: 'Dr. Heena Sachdeva',
      specialty: 'Orthopedics',
      image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
    },
    {
      name: 'Dr. Ankur Sharma',
      specialty: 'Medicine',
      image: 'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg',
    },
    {
      name: 'Dr. Priya Patel',
      specialty: 'Cardiologist',
      image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg',
    },
    {
      name: 'Dr. Rajiv Mehta',
      specialty: 'Dermatologist',
      image: 'https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Calculate which doctors to show (3 at a time)
  const visibleDoctors = [];
  for (let i = 0; i < 3; i++) {
    const index = (activeIndex + i) % doctors.length;
    visibleDoctors.push(doctors[index]);
  }

  return (
    <div className="doctor-carousel-container">
      <h2 className="doctor-carousel-title">Our Medical Specialist</h2>
      
      <div className="doctor-carousel">
        <button className="carousel-arrow prev" onClick={prevSlide}>
          &lt;
        </button>
        
        <div className="doctor-cards">
          {visibleDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image-container">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              </div>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
          ))}
        </div>
        
        <button className="carousel-arrow next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-dots">
        {doctors.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DoctorCarousel;
