import React from 'react';
import './RecentPosts.css';
const posts = [
  { title: 'Making a beautiful Dashboard designs ', date: '12 Apr 2025', tags: 'Using Power BI to create intuitive dashboards' },
  { title: 'Creating pixel perfect apps using Figma', date: '20 Apr 2025', tags: 'Figma, Design', description: 'Dynamic Todo App using a predefined Figma.' }
];
const RecentPosts = () => {
  return (
    <section className="recent-posts">
      <div className="posts-header">
        <h2 className="section-title">Recent posts</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="posts-grid">
        {posts.map((p,i)=>(<div key={i} className="post-card">
            <h3 className="post-title">{p.title}</h3>
            <p className="post-meta">{p.date} | {p.tags}</p>
            <p className="post-description">{p.description}</p>
          </div>))}
      </div>
    </section>
  );
};
export default RecentPosts;