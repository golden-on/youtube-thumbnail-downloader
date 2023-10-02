"use client"
import React, { useState } from 'react';
import styles from './ThumbnailDownloader.module.css';
import Image from 'next/image';

const ThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [videoId, setVideoId] = useState('');

  const thumbnailSizes = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];
  const sizesObj = {
    maxresdefault : '1280x720',
    sddefault : '640x480',
    hqdefault : '480x360',
    mqdefault : '320x180'
  }

  const extractThumbnailUrl = (videoUrl, size) => {
    const videoIdRegex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/(?:.*v=|.*vi=|.*watch\?v=|.*embed\/|.*youtu.be\/|.*v\/|.*e\/|.*u\/\w\/|.*watch\?feature=player_embedded&v=|.*videos\/|.*upload.*\/|v%3D|^youtu\.be\/)([^#\&\?\n]*).*/;
    const match = videoUrl.match(videoIdRegex);

    if (match && match[1]) {
      const videoId = match[1];
      setVideoId(videoId);
      return `https://img.youtube.com/vi/${videoId}/${size}.jpg`;
    }

    return null;
  };

  const handleDownload = (size) => {
    const thumbnailUrl = extractThumbnailUrl(videoUrl, size);
    if (thumbnailUrl) {
      setThumbnailUrl(thumbnailUrl);
    } else {
      console.error('Invalid YouTube video URL');
    }
  };

  const downloadImage = async (url, filename) => {
    try {
      const response = await fetch(url, {mode: 'no-cors'});
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = objectURL;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      URL.revokeObjectURL(objectURL);  // Clean up the object URL after use
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  
  

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  return (
    <>
      <div className={styles.thumbnailDownloader}>
        <header className={styles.header}>
          <h1>Download High-Quality Thumbnails for YouTube and Vimeo Videos</h1>
          <p>Download thumbnail images of all quality for free. Just paste the video URL below and click &apos;Download Thumbnail Image&apos;.</p>
        </header>
        <input
          type="text"
          placeholder="Enter YouTube Video URL"
          value={videoUrl}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button onClick={() => handleDownload('maxresdefault')} className={styles.button}>
          Download Thumbnail Image (Max Resolution)
        </button>
        {/* <div className={styles.thumbnailContainer}> */}
        {thumbnailUrl && (thumbnailSizes.map((size) => (
          <div className={styles.downloadContainer}  key={size}>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/${size}.jpg`}
              alt={`Thumbnail ${size}`}
              width={240}
              height={100}
              sizes='100'
              className={styles.thumbnail}
            />
            <button onClick={() => downloadImage(thumbnailUrl, `${size}_thumbnail.jpg`)} className={styles.downloadButton}>
              Download {sizesObj[size]}
            </button>
          </div>
        )))}
        <div className={styles.content}>
          <section>
            <h2>Why Use this YouTube Thumbnail Grabber?</h2>
            <p>This YouTube thumbnail downloader allows users to easily extract thumbnails from YouTube videos. These thumbnails can be utilized in presentations, animations, and various creative projects.</p>
          </section>

          <section>
            <h2>How to Utilize this YouTube Thumbnail Downloader?</h2>
            <p>Using this YouTube thumbnail downloader is straightforward. Copy the YouTube video link for which you need a thumbnail. Paste the URL into the provided input box, and the tool will automatically generate thumbnails in different sizes. Click on the 'Download Thumbnail' button to save the thumbnail to your device. For Android users, simply save the images, while iPhone users may need to follow alternative steps.</p>
          </section>

          <section>
            <h2>Is Downloading YouTube Thumbnails Legal?</h2>
            <p>Yes, downloading YouTube video thumbnails is 100% legal. However, it's important to note that both thumbnails and videos are copyrighted materials. To reuse them, you should seek permission from the original content creator.</p>
          </section>

          <section>
            <h2>Compatibility of this YouTube Thumbnail Grabber</h2>
            <p>This YouTube thumbnail downloader is compatible with all devices except for iPhones, as iPhones have restrictions on saving images directly. For iPhone users with jailbroken devices, this restriction can be bypassed. The tool works smoothly on various Android devices, laptops, and desktop systems.</p>
          </section>

          <section>
            <h2>Copyright Considerations for YouTube Thumbnails</h2>
            <p>Every YouTube screenshot you download is subject to the copyright of the respective video owner. If you intend to use it in your work, obtaining proper permissions is essential. Reusing YouTube thumbnails, especially on YouTube itself, may lead to copyright issues. However, using them outside of YouTube, such as on websites for creating logos or other design work, generally poses no problems. To ensure compliance and avoid copyright concerns, it's advisable to request permission for usage.</p>
          </section>

          <section>
            <h2>Are Reused YouTube Thumbnails SEO-Friendly?</h2>
            <p>Reusing YouTube thumbnails is not considered SEO-friendly, as Google indexes almost all thumbnails available on YouTube. Identifying uniqueness is a challenge, making reused thumbnails less effective for SEO. However, you can enhance your thumbnail's uniqueness by applying distinct effects using tools like Photoshop, making it SEO-friendly once again.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ThumbnailDownloader;
