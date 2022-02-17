import React, { useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const MobileWrapper = () => {
  const { width } = useWindowSize();

  if (width < 481) {
    return (
      <div className='mobile-message'>
        <p className='mobile-message-text'>Rotate your device.</p>
      </div>
    );
  } else {
    return null;
  }
};

export default MobileWrapper;
