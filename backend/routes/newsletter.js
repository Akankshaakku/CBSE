const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    
    const newsletter = await Newsletter.create({ 
      email: email.toLowerCase(),
      subscribed: true
    });
    
    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter!',
      email: newsletter.email
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    const newsletter = await Newsletter.findOne({ email: email.toLowerCase() });
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Email not found' });
    }
    
    await Newsletter.findByIdAndUpdate(newsletter._id, { subscribed: false }, { new: true });
    
    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all subscribers (admin only)
router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
