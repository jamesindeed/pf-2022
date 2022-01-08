import React from 'react';

const Header = () => {
  return (
    <div
      className='flex px-[5vw] font-[Syncopate] justify-between pt-8 pb-12 text-xl tracking-wide text-[#252422] font-semibold uppercase'
      data-scroll-section
    >
      <div>menu</div>

      <div className='text-3xl'>J|T</div>

      <div>blog</div>
    </div>
  );
};

export default Header;
