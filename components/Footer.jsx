import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '.';
import SplitText from '../utils/split-text.min.js';
import { gsap } from 'gsap/dist/gsap';
import useOnScreen from '../hooks/useOnScreen';
import cn from 'classnames';

const Footer = () => {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineChildren',
      });
      const splitParent = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineParent',
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
        }
      );
    }
  }, [reveal]);

  return (
    <section
      className='footer text-center pt-[100px] pb-[100px]'
      data-scroll-section
    >
      <SectionHeader title='Based in' />

      <h1
        className={cn(
          'location text-[14vw] lg:text-[11vw] 4xl:text-[10vw] uppercase leading-none font-["Bodoni_Moda"]',
          { 'is-reveal': reveal }
        )}
        id='location-text'
        ref={ref}
      >
        Auckland New Zealand
      </h1>
    </section>
  );
};

export default Footer;
