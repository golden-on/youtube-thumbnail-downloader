const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const fetchThumbnail = async (videoId) => {
    try {
      // Fetch the thumbnail image (replace this with your actual logic)
      const fetch = require('node-fetch');
      const response = await fetch(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
      
      if (!response.ok) {
        console.error(`Error fetching thumbnail: ${response.statusText}`);
        throw new Error('Error fetching thumbnail');
      }
      
      const imageData = await response.buffer(); // Get image data as a buffer
      return imageData;
    } catch (error) {
      console.error('Error fetching thumbnail:', error);
      throw new Error('Error fetching thumbnail');
    }
  };
  

app.get('/get-thumbnail', async (req, res) => {
  try {
    const { videoId } = req.query;

    // Fetch the thumbnail image
    const thumbnail = await fetchThumbnail(videoId);

    // Set the appropriate content type and send the image as the response
    res.set('Content-Type', 'image/jpeg');
    res.send(thumbnail);
  } catch (error) {
    console.error('Error handling thumbnail download:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
