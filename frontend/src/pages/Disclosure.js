import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Disclosure = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  // Close expanded item on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && expandedItem) {
        setExpandedItem(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [expandedItem]);

  const disclosureItems = [
    {
      id: 1,
      title: 'Building Certificate',
      description: 'Official building safety and compliance certificate',
      file: '/image/Certificate/Building Certificate.pdf'
    },
    {
      id: 2,
      title: 'Fire Safety Certificate',
      description: 'Fire safety compliance and emergency procedures certification',
      file: '/image/Certificate/Fire safety.pdf'
    },
    {
      id: 3,
      title: 'Land Certificate',
      description: 'Land ownership and property documentation',
      file: '/image/Certificate/Land Certificate.pdf'
    },
    {
      id: 4,
      title: 'NOC (No Objection Certificate)',
      description: 'No Objection Certificate from relevant authorities',
      file: '/image/Certificate/NOC.pdf'
    },
    {
      id: 5,
      title: 'Recognition Certificate',
      description: 'School recognition and affiliation certificate',
      file: '/image/Certificate/Recognition certificate.pdf'
    },
    {
      id: 6,
      title: 'Drinking Water Safety Certificate',
      description: 'Water quality and safety certification',
      file: '/image/Certificate/Drinking water safety certificate.pdf'
    },
    {
      id: 7,
      title: 'Teacher Qualifications',
      description: 'Faculty qualifications and certifications',
      file: '/image/Certificate/Teacher.pdf'
    },
    {
      id: 8,
      title: 'Trust Deed',
      description: 'Trust deed and organizational documentation',
      file: '/image/Certificate/Trust Deed_compressed.pdf'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="disclosure-page">
      {/* Hero Section */}
      <section className="disclosure-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="disclosure-hero-content"
          >
            <h1>Mandatory Disclosure</h1>
            <p>Transparency and Compliance Documentation</p>
          </motion.div>
        </div>
      </section>

      {/* Disclosure Content */}
      <section className="disclosure-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Official Documents & Certificates</h2>
            <p className="section-subtitle-new">
              All mandatory disclosures and compliance documents as per regulatory requirements
            </p>
          </motion.div>

          <div className="row">
            {disclosureItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="col-lg-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="disclosure-card">
                  <div
                    className="disclosure-header"
                    onClick={() => toggleExpand(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="disclosure-title-section">
                      <i className="fas fa-file-pdf text-danger me-3"></i>
                      <div>
                        <h5 className="mb-1">{item.title}</h5>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
                    <i
                      className={`fas fa-chevron-down transition-icon ${
                        expandedItem === item.id ? 'expanded' : ''
                      }`}
                    ></i>
                  </div>
                  <AnimatePresence mode="wait">
                    {expandedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="disclosure-body"
                      >
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary-new btn-sm"
                        >
                          <i className="fas fa-download me-2"></i>
                          Download Certificate
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="disclosure-info-section">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="info-card">
                <h3>School Information</h3>
                <ul className="info-list">
                  <li><strong>School Name:</strong> Children's Paradise Public School</li>
                  <li><strong>Location:</strong> Muzaffarpur, Bihar</li>
                  <li><strong>Affiliation:</strong> CBSE (In Progress)</li>
                  <li><strong>Classes:</strong> Nursery to Class 12</li>
                  <li><strong>Established:</strong> 2010</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="info-card">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li><strong>Address:</strong> Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Akharaghat, Muzaffarpur</li>
                  <li><strong>Phone:</strong> +91 9430810464, +91 9798209332</li>
                  <li><strong>Email:</strong> cppschoolmuz@gmail.com</li>
                  <li><strong>Office Hours:</strong> 9:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosure;

