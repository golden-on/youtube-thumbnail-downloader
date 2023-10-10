"use client"
import React, { useEffect } from 'react';

const AtgScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//acscdn.com/script/atg.js';
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-adel', 'atag');
    script.setAttribute('czid', 'nem1aeihao');

    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null;
};

export default AtgScript;
