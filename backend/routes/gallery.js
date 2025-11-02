const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    let query = Gallery.find();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      query = query.where('featured').equals(true);
    }
    
    // Filter by category if requested
    if (req.query.category) {
      query = query.where('category').equals(req.query.category);
    }
    
    // Sort by createdAt descending
    query = query.sort({ createdAt: -1 });
    
    // Apply limit if specified
    if (req.query.limit) {
      query = query.limit(parseInt(req.query.limit));
    }
    
    const gallery = await query.exec();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single gallery item
router.get('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create gallery item (admin only)
router.post('/', async (req, res) => {
  try {
    const galleryItem = await Gallery.create(req.body);
    res.status(201).json(galleryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update gallery item (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
