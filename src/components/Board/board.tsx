import React from 'react';

// import { Container } from './styles';
// Components
import Hero from '../Hero/hero';
import MiniBoss from '../MiniBoss/mini-boss';

// Assets
// import stars from '../../assets/estrelas.png';
import starsAndMoon from '../../assets/lua-estralas-1.png';

const Board: React.FC = () => {
  return (
    <div>
      <Hero />
      <MiniBoss />
      <img src={starsAndMoon} alt="" />
    </div>
  );
}

export default Board;