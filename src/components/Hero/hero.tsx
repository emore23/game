// Utils
import React, { useState } from 'react';
import { HERO_SIZE, GAME } from '../../settings/constants';
import useEventListener from '@use-it/event-listener';

// Styles
import './hero.css';

// Assets
import nave from '../../assets/nave-solta-2.png';

const initialPosition = {
  x: 14,
  y: 10
}

const Hero: React.FC = () => {
  const [ position, setPosition ] = useState(initialPosition);

  useEventListener('keydown', (event: any) => { 
    if(event.key === 'ArrowLeft') {
      const newPosition = {
        x: position.x - 1,
        y: position.y,
      };
      setPosition(newPosition);
    } else if (event.key === 'ArrowRight') {
      const newPosition = {
        x: position.x + 1,
        y: position.y,
      };
      setPosition(newPosition);
    } else if (event.key === 'ArrowDown') {
      const newPosition = {
        x: position.x,
        y: position.y - 1,
      };
      setPosition(newPosition);
    } else if (event.key === 'ArrowUp') {
      const newPosition = {
        x: position.x,
        y: position.y + 1,
      };
      setPosition(newPosition);
    }
    console.log(event);
  })

  // setTimeout(() => {
  //   const newPosition = { x: 5, y: 12 };
  //   setPosition(newPosition);
  // }, 2000)
  
  return (
    <div
      style={{
        position: 'absolute',
        top: GAME * position.y,
        left: GAME * position.x,
        width: HERO_SIZE,
        backgroundRepeat: 'no-repeat',
        height: 600,
        backgroundImage: `url(${nave})`,
        animation: 'hero-animation 0s steps(2) infinite'
      }}
    />
  );
}

export default Hero;