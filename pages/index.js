import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { Header, About, Featured, Footer, Gallery, Hero } from '../components';
import useLocoScroll from '../hooks/useLocoScroll';

export default function Home() {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const handlePreloader = () => {
    setPreloader(false);
  };

  return (
    <>
      <Head>
        <title>James Troughton</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      {preloader ? (
        <div
          onClick={handlePreloader}
          className='transition ease-in-out duration-250 absolute-class flex items-center justify-center flex-col bg-[#181717] text-[#f5f0ec]'
        >
          <h2 className='uppercase italic mt-2 text-[3.5vw] md:text-[2.5vw] font-["Baj_Jamjuree"]'>
            {timer}
          </h2>
          <h1 className='uppercase font-semibold text-[3.5vw] md:text-[2.5vw] font-["Baj_Jamjuree"]'>
            James Troughton
          </h1>
          <h2 className='uppercase italic mt-2 text-[3.5vw] md:text-[2.5vw] font-["Baj_Jamjuree"]'>
            Auckland, New Zealand
          </h2>
        </div>
      ) : (
        <div className='px-[5vw]' id='main-container' data-scroll-container>
          <Header />
          <Hero />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}
