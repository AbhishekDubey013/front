import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


  
function HeroSection() {

  const scrollToCards = () => {
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='hero-container'>
      <video src='/videos/bf.mp4' autoPlay loop muted />
      <h1>WELL BEING AWAITS</h1>
      <p>All our tests and diagnostic consultations are free. What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/cards'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={scrollToCards}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
