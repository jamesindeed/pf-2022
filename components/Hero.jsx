import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';

const Hero = () => {
  useEffect(() => {
    gsap.to('.header-text', {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);

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
      <div
        id='header-text'
        className='header-text font-["Bodoni_Moda"] tracking-tighter text-center uppercase text-[14vw] 4xl:text-[13vw] leading-none font-bold'
      >
        <h1
          id='header-text'
          className='header-text font-["Bodoni_Moda"] tracking-tighter text-center uppercase text-[14vw] 4xl:text-[13vw] leading-none font-bold'
        >
          James
        </h1>
      </div>
      <div
        id='header-text-parent'
        className='header-text pb-[100px] font-["Bodoni_Moda"] tracking-tighter text-center uppercase text-[14vw] 4xl:text-[13vw] leading-none font-bold'
      >
        <h1
          id='header-text-parent'
          className='header-text pb-[100px] font-["Bodoni_Moda"] tracking-tighter text-center uppercase text-[14vw] 4xl:text-[13vw] leading-none font-bold'
        >
          Troughton
        </h1>
      </div>
    </section>
  );
};

export default Hero;
