import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RecentPosts from './components/RecentPosts';
import FeaturedWorks from './components/FeaturedWorks';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </>
  );
};

export default App;
