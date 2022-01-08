import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { About, Featured, Footer, Gallery, Hero } from '../components';

export default function Home() {
  const [preloader, setPreloader] = useState(true);

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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {preloader ? (
        <div
          onClick={handlePreloader}
          className='transition-all ease-in-out duration-250 absolute-class flex items-center justify-center flex-col bg-[#181717] text-[#f5f0ec]'
        >
          <h2 className='uppercase italic mt-2 text-[2vw] font-["Baj_Jamjuree"]'>
            {timer}
          </h2>
          <h1 className='uppercase font-semibold text-[2vw] font-["Baj_Jamjuree"]'>
            James Troughton
          </h1>
          <h2 className='uppercase italic mt-2 text-[2vw] font-["Baj_Jamjuree"]'>
            Auckland, New Zealand
          </h2>
        </div>
      ) : (
        <div className='px-[5vw]' id='main-container' data-scroll-container>
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
