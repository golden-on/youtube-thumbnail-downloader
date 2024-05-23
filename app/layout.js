import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouTube Thumbnail Downloader - Download High-Quality Thumbnails',
  description: 'Download high-quality thumbnails for YouTube and Vimeo videos for free. Paste the video URL and get thumbnail images in various sizes.',
  other: {
    monetag: '89bce8a47b55459ed6cd8a22f05c8add',
  },
}

 function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        async
        src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2101857678803942"
      />
    </html>
  )
}
export default RootLayout;
