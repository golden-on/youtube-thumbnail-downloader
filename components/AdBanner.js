"use client"
import React, { useEffect, useRef } from 'react';

const AdBanner = ({ direction, keys }) => {
  const banner = useRef();

  const autoClickElement = () => {
    const targetElement = document.getElementsByTagName('iframe')[0].contentDocument.getElementById("atLink-fdc056ec88a9ae30c394fd62e5a2f255");
    document.querySelectorAll('iframe').forEach( item =>
        console.log(item.contentWindow.document.body.querySelectorAll('a'))
    )
  
    if (!targetElement) {
      console.error('Element not found');
      return;
    }

    console.log('Auto-clicking element...', targetElement);
    targetElement.click();
    window.location.reload();
  };
  
  

  const atOptions = {
    key: keys,
    format: 'iframe',
    height: 600,
    width: 100,
    params: {}
  };

  useEffect(() => {
    console.log(keys, direction);
    
    let scriptLoaded = false;
    let clickInterval;  // Declare clickInterval here
  
    if (!banner.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.profitabledisplayformat.com/${keys}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
  
      script.onload = () => {
        scriptLoaded = true;
  
        let clickCount = 0;
        const maxClicks = 10;
  
        clickInterval = setInterval(() => {  // Assign to clickInterval here
          console.log("tst01", clickCount < maxClicks);
          if (clickCount < maxClicks && scriptLoaded) {
            autoClickElement();
            clickCount += 1;
          } else {
            clearInterval(clickInterval); // Stop auto-clicking after max clicks
          }
        }, 12000); // 12 seconds interval (2 minutes divided by 10)
  
        // Clear the auto-click interval after 2 minutes
        setTimeout(() => {
          clearInterval(clickInterval);
        }, 120000); // 2 minutes
      };
  
      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  
    return () => {
      // Clean up on component unmount
      clearInterval(clickInterval);
    };
  }, [keys, direction]);
  

  return <div ref={banner} />;
};

export default AdBanner;

