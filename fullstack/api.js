const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const loadOffersData = () => {
  try {
    const rawData = fs.readFileSync(path.join(__dirname, '../data/list_of_offers.json'));
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error loading offers data:', error);
    return { offers: [] };
  }
};

app.get('/api/offers', (req, res) => {
  const data = loadOffersData();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;