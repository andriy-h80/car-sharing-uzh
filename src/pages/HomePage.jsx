import React from 'react';
import Home from '../components/Home/Home';
import Description from '../components/Description/';
// import ReviewsSlider from '../components/ReviewsSlider/';
import Footer from '../components/Footer/';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'inherit',
      }}
    >
      <Home />
      <Description />
      {/* <ReviewsSlider /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
