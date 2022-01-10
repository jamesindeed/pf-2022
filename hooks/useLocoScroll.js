// import { gsap } from 'gsap/dist/gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const LocomotiveScroll = dynamic(
  () => import('../utils/locomotive-scroll.min.js'),
  {
    ssr: false,
  }
);

// gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main-container');

    const locoScroll = import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollEl,
        inertia: 0.7,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
        tablet: {
          breakpoint: 0,
        },
        mobile: {
          breakpoint: 0,
        },
      });
    });

    // locoScroll.on('scroll', () => {
    //   ScrollTrigger.update();
    // });

    // ScrollTrigger.scrollerProxy(scrollEl, {
    //   scrollTop(value) {
    //     if (locoScroll) {
    //       return arguments.length
    //         ? locoScroll.scrollTo(value, 0, 0)
    //         : locoScroll.scroll.instance.scroll.y;
    //     }
    //     return null;
    //   },
    //   scrollLeft(value) {
    //     if (locoScroll) {
    //       return arguments.length
    //         ? locoScroll.scrollTo(value, 0, 0)
    //         : locoScroll.scroll.instance.scroll.x;
    //     }
    //     return null;
    //   },
    // });

    // const lsUpdate = () => {
    //   if (locoScroll) {
    //     locoScroll.update();
    //   }
    // };

    // ScrollTrigger.addEventListener('refresh', lsUpdate);
    // ScrollTrigger.refresh();

    // return () => {
    //   if (locoScroll) {
    //     ScrollTrigger.removeEventListener('refresh', lsUpdate);
    //     locoScroll.destroy();
    //     locoScroll = null;
    //     console.log('Kill', locoScroll);
    //   }
    // };
  }, [start]);
}
