import React from 'react';
import { SectionHeader } from '.';

const About = () => {
  return (
    <section className='py-[100px]' id='about' data-scroll-section>
      <SectionHeader title='about' />
      <p className='text-[4.5rem] leading-[1.12]' id='headline'>
        I am a software engineer with skills in both front end and back end
        development of websites and web applications. As the next step in my
        career I am looking to work with a small team of passionate people to
        create and design outstanding products for our clients.
      </p>
    </section>
  );
};

export default About;
