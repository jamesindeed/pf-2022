import React from 'react';
import { SectionHeader } from '.';

const Footer = () => {
  return (
    <section className='text-center pt-[100px] pb-[100px]' data-scroll-section>
      <SectionHeader title='Based in' />

      <h1
        className='text-[14vw] lg:text-[11vw] 4xl:text-[10vw] uppercase leading-none font-["Bodoni_Moda"]'
        id='location-text'
      >
        Auckland New Zealand
      </h1>
    </section>
  );
};

export default Footer;
