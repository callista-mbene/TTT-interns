import React from 'react';
import './FeaturedWorks.css';
const works = [
  { title: 'Data Analytics', year: '2025', category: 'Word Cloud', description: 'Extracting wordclouds from tweet data.', image: 'public/dataAnalyticsImage.jpg' },
  { title: 'Software Development', year: '2025', category: 'App Creation', description: 'Creating a functional todo app using Javascript.', image: 'public/softwareDevelopmentImage.jpg' }
];
const FeaturedWorks = () => {
  return (
    <section className="featured-works">
      <h2 className="section-title">Featured works</h2>
      <div className="works-list">
        {works.map((w,i)=>(<div key={i} className="work-card">
            <img src={w.image} alt={w.title} className="work-img" />
            <div className="work-info">
              <h3 className="work-title">{w.title}</h3>
              <div className="work-meta">
                <span className="work-year">{w.year}</span>
                <span className="work-category">{w.category}</span>
              </div>
              <p className="work-description">{w.description}</p>
            </div>
          </div>))}
      </div>
    </section>
  );
};
export default FeaturedWorks;