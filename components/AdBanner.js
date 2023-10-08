"use client"
import React from 'react';
import { useEffect, useRef } from 'react'

const AdBanner = ({direction, keys}) => {
    const banner = useRef()

    const atOptions = {
        key: keys,
        format: 'iframe',
        height: 600,
        width: 100,
        params: {}
    }
    useEffect(() => {
        console.log(keys, direction)
        if (!banner.current.firstChild) {
          const conf = document.createElement("script");
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = `//www.profitabledisplayformat.com/${keys}/invoke.js`;
          conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

          if (banner.current) {
            banner.current.append(conf);
            banner.current.append(script);
          }
        }
      }, [keys]);
  

  return <div ref={banner} />;
}
export default AdBanner;