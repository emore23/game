import React from 'react';

import './hero.css';

// Assets
import nave from '../../assets/nave-solta.png';
import { TILE_SIZE } from '../../settings/constants';

const Hero: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 48 * 1,
        left: 48 * 2,
        width: TILE_SIZE,
        height: 600,
        backgroundImage: `url(${nave})`,
        animation: 'hero-animations s steps(4) infinite'
      }}
    />
  );
}

export default Hero;