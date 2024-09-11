const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/mining-news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=mining&apiKey=${process.env.API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
