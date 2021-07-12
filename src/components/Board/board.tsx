import React from 'react';

// import { Container } from './styles';
// Components
import Hero from '../Hero/hero';

// Assets
// import stars from '../../assets/estrelas.png';
import starsAndMoon from '../../assets/lua-estralas.png';

const Board: React.FC = () => {
  return (
    <div>
      <Hero />
      <img src={starsAndMoon} alt="" />
    </div>
  );
}

export default Board;