const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Proxy endpoint
app.use('/api/proxy', async (req, res) => {
  try {
    const apiUrl = 'https://api.judge0.com' + req.url; // Replace with the external API URL
    const response = await axios.get(apiUrl, {
      headers: {
        // Add any required headers for the external API
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message,
    });
  }
});

// Serve static files from XAMPP (assuming your XAMPP htdocs directory is 'C:/xampp/htdocs')
app.use(express.static('C:\Apps\XAMPP\htdocs\DE PROJECT'));

// Start the server
app.listen(PORT, () => {
  console.log(`https://api.judge0.com`);
});
