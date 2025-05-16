import React from 'react';
import '../styles/LatestNews.css';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/detox-water-with-various-citrus-fruit_114579-59449.jpg',
      date: 'March 20, 2023',
      title: '8 Tips To Protect Your Mental Health',
      category: 'Mental Health',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/detox-water-with-various-citrus-fruit_114579-59449.jpg',
      date: 'March 15, 2023',
      title: '5 Tips To Protect Your Mental Health',
      category: 'Mental Health',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/detox-water-with-various-citrus-fruit_114579-59449.jpg',
      date: 'March 10, 2023',
      title: '6 Tips To Protect Your Mental Health',
      category: 'Mental Health',
    },
  ];

  return (
    <div className="latest-news-section">
      <div className="latest-news-header">
        <div className="section-tag">
          <span className="tag-icon">📰</span>
          <span className="tag-text">News & Articles</span>
        </div>
        <h2 className="section-title">Read Our Latest News</h2>
      </div>
      
      <div className="news-cards-container">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
              <div className="news-date">{item.date}</div>
            </div>
            <div className="news-content">
              <div className="news-category">
                <span className="category-icon">🧠</span>
                <span className="category-text">{item.category}</span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <button className="read-more-btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
