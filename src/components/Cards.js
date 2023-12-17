import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div>
      <video src='/videos/v2land.mp4' autoPlay loop muted />
    <div id="cards-section" className='cards'>
      <h1>Check out our tests!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='depresion.jpg'
              text='Do you feel a persistent sadness and emptiness? Give this test a try.'
              label='Depression'
              path='/products'
            />
          <CardItem
              src='anxiety1.jpg'
              text='Do you feel overwhelmed with worry and fear? Try this diagnostic test.'
              label='Anxiety'
              path='/services'
            />
            <CardItem
              src='PTSD.jpg'
              text='Experiencing flashbacks and severe anxiety from past trauma? This test can help.'
              label='PTSD'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='adhd1.jpg'
              text='Struggle with focus and impulsive actions? Give our ADHD test a try'
              label='ADHD'
              path='/pretest'
            />
            <CardItem
              src='addiction.jpg'
              text='Feel trapped in a cycle of craving and regret? This addiction test can guide you.'
              label='Addiction'
              path='/sign-up'
            />
             <CardItem
              src='bipolar.jpg'
              text='Experiencing extreme mood swings? Our bipolar disorder test may provide insights.'
              label='Bipolar Disorder'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;

