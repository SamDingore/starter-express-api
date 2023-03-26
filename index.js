const express = require('express');
const app = express();
const port = 3000;

// In-memory list of messages
const messages = [];

// Serve the chat page
app.get('/chat', (req, res) => {
  const name = req.query.name;
  const lastMessageTime = new Date().toISOString();

  // Return last 10 messages and current time
  const recentMessages = messages.slice(-10);
  res.json({ lastMessageTime, recentMessages });
});

// Handle incoming messages
app.post('/messages', express.urlencoded({ extended: true }), (req, res) => {
  const name = req.query.name;
  const text = req.query.text;
  const timestamp = new Date().toISOString();

  // Add message to list
  messages.push({ sender: name, text, timestamp });

  // Send response
  res.sendStatus(200);
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
