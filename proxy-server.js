// proxy-server.js
const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL parameter is required');
  }
  request(url).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
