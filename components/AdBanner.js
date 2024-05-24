"use client"
import { useEffect, useRef } from 'react';

const AdBanner = ({direction, keys}) => {
    const banner = useRef()

    const atOptions = {
        key: keys,
        format: 'iframe',
        height: 600,
        width: 160,
        params: {}
    }
    useEffect(() => {
        console.log(keys, direction)
        if (!banner.current.firstChild) {
          const conf = document.createElement("script");
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = `//www.topcreativeformat.com/${keys}/invoke.js`;
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