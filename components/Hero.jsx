import React, { useEffect } from 'react';

const Hero = () => {
  return (
    <section
      className='relative pb-[100px] left-0 font-semibold tracking-wide text-gray-700 uppercase top-32'
      data-scroll-section
    >
      <ul className='absolute sm:top-0 -top-28 font-[Syncopate] text-red-800 space-y-1'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1
        id='header-text'
        className='pb-[100px] font-["Bai_Jamjuree"] text-center uppercase text-[14vw] 4xl:text-[10vw] leading-none font-bold'
      >
        James Troughton
      </h1>
    </section>
  );
};

export default Hero;
