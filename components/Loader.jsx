import React, { useEffect, useRef, useState } from 'react';
import useRandomInterval from '../hooks/useRandomInterval';
import { TimelineLite, Power4, Back, Circ } from 'gsap/dist/gsap';

const Loader = ({ setLoaded }) => {
  const [percent, setPercent] = useState(0);
  let minMax = percent < 97 ? [10, 50] : [250, 500];

  let tl = new TimelineLite();
  let sectionContainer = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    if (percent === 100) {
      tl.to(textRef, {
        yPercent: 100,
        ease: Circ.easeIn,
        duration: 1,
        delay: 0.4,
      }).to(
        sectionContainer,
        {
          height: 0,
          ease: Circ.easeInOut,
          duration: 1.2,
          onComplete: () => setLoaded(true),
        },
        '-=0.3'
      );
    }
  }, [percent]);

  useRandomInterval(
    () => percent < 100 && setPercent((percent) => percent + 1),
    ...minMax
  );

  return (
    <section className='section-loader' ref={(el) => (sectionContainer = el)}>
      <div className='loader-overflow'>
        <div className='loader-text' ref={(el) => (textRef = el)}>
          {percent}%
        </div>
      </div>
      <div className='loader-bar' style={{ width: `${percent}%` }} />
    </section>
  );
};

export default Loader;
