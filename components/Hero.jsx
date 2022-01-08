import React, { useEffect } from 'react';

const Hero = () => {
  return (
    <section
      className='relative pb-[100px] left-0 font-semibold tracking-wide text-[#252422] uppercase top-32'
      data-scroll-section
    >
      <ul className='absolute sm:top-0 -top-28 font-[Syncopate] text-[#780000] space-y-1'>
        <li>
          <a href='#intro'>Intro</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
      <h1
        id='header-text'
        className='pb-[100px] font-["Bodoni_Moda"] tracking-tighter text-center uppercase text-[14vw] 4xl:text-[10vw] leading-none font-bold'
      >
        James Troughton
      </h1>
    </section>
  );
};

export default Hero;
