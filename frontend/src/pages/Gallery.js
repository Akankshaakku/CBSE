import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: '/image/PG1.jpeg', alt: 'Chhath Puja Performance at annual function', title: 'Chhath Puja Performance', desc: '10+ Students performed' },
    { id: 2, src: '/image/PG2.jpeg', alt: 'Chief Guest : Ajay Nishad Ji - Ex. M.P (Muzaffarpur)', title: 'Chief Guest Event', desc: 'Ajay Nishad Ji - Ex. M.P' },
    { id: 3, src: '/image/PG3.jpeg', alt: 'Classical Dance Performance by small champs', title: 'Classical Dance Performance', desc: '7 Students performed' },
    { id: 4, src: '/image/PG4.jpeg', alt: 'Dance Performance by class Vth Girls', title: 'Dance Performance', desc: '10+ students performed' },
    { id: 5, src: '/image/PG5.jpeg', alt: 'Dance performance by small kids at annual function', title: 'Dance Performance Kids', desc: '10+ Students performed' },
    { id: 6, src: '/image/PG6.jpeg', alt: 'Students Enjoying The Annual Function', title: 'Annual Function', desc: '25 Students' },
    { id: 7, src: '/image/photog1.png', alt: 'School Event', title: 'School Event', desc: 'Students in action' },
    { id: 8, src: '/image/photog2.png', alt: 'School Activity', title: 'School Activity', desc: 'Learning through activities' },
    { id: 9, src: '/image/photog3.png', alt: 'School Program', title: 'School Program', desc: 'Special program' },
    { id: 10, src: '/image/photog4.jpeg', alt: 'School Celebration', title: 'School Celebration', desc: 'Celebrating together' },
    { id: 11, src: '/image/photog5.png', alt: 'Student Achievement', title: 'Student Achievement', desc: 'Proud moments' },
    { id: 12, src: '/image/photog6.jpg', alt: 'School Gathering', title: 'School Gathering', desc: 'Community event' },
    { id: 13, src: '/image/photog7.png', alt: 'Sports Event', title: 'Sports Event', desc: 'Athletic competition' },
    { id: 14, src: '/image/photog8.png', alt: 'Cultural Program', title: 'Cultural Program', desc: 'Traditional performance' },
    { id: 15, src: '/image/photog9.png', alt: 'Science Exhibition', title: 'Science Exhibition', desc: 'Student projects' },
    { id: 16, src: '/image/photog10.png', alt: 'Classroom Activity', title: 'Classroom Activity', desc: 'Interactive learning' },
    { id: 17, src: '/image/photog11.png', alt: 'School Assembly', title: 'School Assembly', desc: 'Morning assembly' },
    { id: 18, src: '/image/photog12.png', alt: 'Graduation Ceremony', title: 'Graduation Ceremony', desc: 'Celebrating success' },
    { id: 19, src: '/image/Photo1.jpeg', alt: 'School Campus', title: 'School Campus', desc: 'Beautiful campus' },
    { id: 20, src: '/image/Photo2.jpg', alt: 'Library Section', title: 'Library Section', desc: 'Knowledge hub' },
    { id: 21, src: '/image/Photo3.jpg', alt: 'Lab Facility', title: 'Lab Facility', desc: 'Modern equipment' },
    { id: 22, src: '/image/about-us.jpeg', alt: 'About Us', title: 'About Us', desc: 'School overview' },
    { id: 23, src: '/image/front-image3.jpeg', alt: 'Front View', title: 'Front View', desc: 'School entrance' },
    { id: 24, src: '/image/front-image2.jpeg', alt: 'Campus View', title: 'Campus View', desc: 'Aerial view' },
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gallery-hero-content"
          >
            <h1>Photo Gallery</h1>
            <p>Capturing Moments of Excellence and Joy</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded shadow"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      if (!e.target.src.includes('PG1.jpeg')) {
                        e.target.src = '/image/PG1.jpeg';
                      } else {
                        e.target.style.opacity = '0.5';
                      }
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h6 className="text-white">{image.title}</h6>
                      <p className="text-white-50">{image.desc}</p>
                      <i className="fas fa-search-plus text-white"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="gallery-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="gallery-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
              onError={(e) => {
                e.target.src = '/image/PG1.jpeg';
              }}
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
