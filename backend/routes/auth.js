const express = require('express');
const router = express.Router();

// Simple auth routes for future admin functionality
router.post('/login', (req, res) => {
  res.json({ message: 'Auth endpoint - to be implemented' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

module.exports = router;
