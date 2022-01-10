import React from 'react';
// import Header from './Header';
import CustomCursor from '../CustomCursor';
import dynamic from 'next/dynamic';

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      {/* <Header /> */}
      {children}
    </>
  );
};

export default Layout;
