const express = require('express');
const path = require('path');

const app = express();

// Serve the Angular app's static files
app.use(express.static(path.join(__dirname, 'dist', 'my-portfolio')));

// For all GET requests that don't match an existing file, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'my-portfolio', 'index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`);
});
