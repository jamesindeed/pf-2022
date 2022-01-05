import React from 'react';

const Header = () => {
  return (
    <div
      className='flex justify-between py-[50px] px-4 text-2xl tracking-wide text-[#464646] font-semibold uppercase'
      data-scroll-section
    >
      <div>menu</div>

      <div>James Indeed</div>

      <div>blog</div>
    </div>
  );
};

export default Header;
