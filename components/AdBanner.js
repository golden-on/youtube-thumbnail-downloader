"use client"
import React from 'react';
import { useEffect, useRef } from 'react'

const AdBanner = () => {
    const banner = useRef()

    const atOptions = {
        key: 'fdc056ec88a9ae30c394fd62e5a2f255',
        format: 'iframe',
        height: 600,
        width: 160,
        params: {}
    }
    useEffect(() => {
        if (!banner.current.firstChild) {
          const conf = document.createElement("script");
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = `//www.profitabledisplayformat.com/${atOptions.key}/invoke.js`;
          conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

          if (banner.current) {
            banner.current.append(conf);
            banner.current.append(script);
          }
        }
      }, []);
  

  return <div ref={banner} />;
}
export default AdBanner;