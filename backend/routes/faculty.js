const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// Get all faculty
router.get('/', async (req, res) => {
  try {
    let query = Faculty.find();
    
    // Filter by featured if requested
    if (req.query.featured === 'true') {
      query = query.where('featured').equals(true);
    }
    
    // Sort by createdAt descending
    query = query.sort({ createdAt: -1 });
    
    // Apply limit if specified
    if (req.query.limit) {
      query = query.limit(parseInt(req.query.limit));
    }
    
    const faculty = await query.exec();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single faculty member
router.get('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.findById(req.params.id);
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json(facultyMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create faculty member (admin only)
router.post('/', async (req, res) => {
  try {
    const facultyMember = await Faculty.create(req.body);
    res.status(201).json(facultyMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update faculty member (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json(facultyMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete faculty member (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.findByIdAndDelete(req.params.id);
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
