import React from 'react';
import { SectionHeader } from '.';

const About = () => {
  return (
    <section className='py-[100px]' id='about' data-scroll-section>
      <SectionHeader title='about' />
      <p className='text-[4.5rem] leading-[1.12]' id='headline'>
        I am a software engineer with skills in both front end and back end
        development of websites and web applications. I have always been
        interested in design and technology and I have delved into this career
        path because of that. As the next step in my career I am looking to work
        with a small team of passionate people to create and design outstanding
        products for our clients. In doing this I am hoping to progress and grow
        as a developer and continue to push the boundaries of what I can
        achieve.
      </p>
    </section>
  );
};

export default About;
