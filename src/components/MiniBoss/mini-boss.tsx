import React from 'react';
import { MINIBOSS_SIZE } from '../../settings/constants';

// Styles
import './mini-boss.css';

// Assets
import miniBoss from '../../assets/mini-boss.png';

const MiniBoss: React.FC = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        bottom: 48 * 12,
        left: 48 * 8,
        width: MINIBOSS_SIZE,
        backgroundRepeat: 'no-repeat',
        height: 200,
        backgroundImage: `url(${miniBoss})`,
        animation: 'boss-animation 0.45s steps(2) infinite'
      }}
    />
  );
}

export default MiniBoss;