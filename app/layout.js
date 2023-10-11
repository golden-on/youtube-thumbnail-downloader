import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
export default RootLayout;
