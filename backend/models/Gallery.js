const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['school', 'events', 'facilities', 'students', 'other'],
    default: 'other'
  },
  featured: {
    type: Boolean,
    default: false
  },
  alt: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);
