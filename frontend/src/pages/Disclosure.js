import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Disclosure = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isSafari, setIsSafari] = useState(false);
  const [pdfErrors, setPdfErrors] = useState({});
  const [pdfLoading, setPdfLoading] = useState({});

  // Detect Safari browser
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /iphone|ipad|ipod/.test(userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

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

  // Handle PDF load errors
  const handlePdfError = (itemId) => {
    console.error(`PDF load error for item ${itemId}`);
    setPdfErrors(prev => ({ ...prev, [itemId]: true }));
    setPdfLoading(prev => ({ ...prev, [itemId]: false }));
  };

  // Handle PDF load success
  const handlePdfLoad = (itemId) => {
    console.log(`PDF loaded successfully for item ${itemId}`);
    setPdfLoading(prev => ({ ...prev, [itemId]: false }));
    // Clear any previous errors
    setPdfErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[itemId];
      return newErrors;
    });
  };

  // Get properly encoded file URL
  const getFileUrl = (filePath) => {
    // Use encodeURIComponent for proper URL encoding, but keep the path structure
    // Split the path and encode each part separately to preserve slashes
    const parts = filePath.split('/');
    return parts.map(part => encodeURIComponent(part)).join('/');
  };

  // Set loading state when expanding
  useEffect(() => {
    if (expandedItem) {
      setPdfLoading(prev => ({ ...prev, [expandedItem]: true }));
      // Auto-clear loading after a timeout (fallback)
      const timeout = setTimeout(() => {
        setPdfLoading(prev => {
          const newLoading = { ...prev };
          delete newLoading[expandedItem];
          return newLoading;
        });
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [expandedItem]);

  const disclosureItems = [
    {
      id: 1,
      title: 'Details of Teacher',
      description: 'Complete details and information about teaching staff',
      file: '/image/Certificate/Teacher.pdf'
    },
    {
      id: 2,
      title: 'Building Certificate',
      description: 'Official building safety and compliance certificate',
      file: '/image/Certificate/Building Certificate.pdf'
    },
    {
      id: 3,
      title: 'Fire Safety Certificate',
      description: 'Fire safety compliance and emergency procedures certification',
      file: '/image/Certificate/Fire safety.pdf'
    },
    {
      id: 4,
      title: 'Land Certificate',
      description: 'Land ownership and property documentation',
      file: '/image/Certificate/Land Certificate.pdf'
    },
    {
      id: 5,
      title: 'NOC (No Objection Certificate)',
      description: 'No Objection Certificate from relevant authorities',
      file: '/image/Certificate/NOC.pdf'
    },
    {
      id: 6,
      title: 'Recognition Certificate',
      description: 'School recognition and affiliation certificate',
      file: '/image/Certificate/Recognition certificate.pdf'
    },
    {
      id: 7,
      title: 'Drinking Water Safety Certificate',
      description: 'Water quality and safety certification',
      file: '/image/Certificate/Drinking water safety certificate.pdf'
    },
    {
      id: 8,
      title: 'Teacher Qualifications',
      description: 'Faculty qualifications and certifications',
      file: '/image/Certificate/Teacher.pdf'
    },
    {
      id: 9,
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
            <h1>Mandatory Public Discloser</h1>
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
                      className={`fas fa-chevron-down transition-icon ${expandedItem === item.id ? 'expanded' : ''
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
                        <div className="pdf-viewer-container">
                          {pdfLoading[item.id] && !pdfErrors[item.id] && (
                            <div className="pdf-loading">
                              <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading PDF...</span>
                              </div>
                              <p className="mt-3 text-muted">Loading PDF document...</p>
                            </div>
                          )}
                          {pdfErrors[item.id] ? (
                            <div className="pdf-error-fallback">
                              <div className="pdf-error-message">
                                <i className="fas fa-exclamation-triangle text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                                <h5>Unable to display PDF in browser</h5>
                                <p className="text-muted mb-3">Please download or open in a new window</p>
                                <div className="pdf-action-buttons">
                                  <a
                                    href={getFileUrl(item.file)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary me-2"
                                    download
                                  >
                                    <i className="fas fa-download me-2"></i>Download PDF
                                  </a>
                                  <a
                                    href={getFileUrl(item.file)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>Open in New Window
                                  </a>
                                </div>
                              </div>
                            </div>
                          ) : isSafari ? (
                            // Safari-compatible PDF viewer using object tag
                            <div className="pdf-viewer-wrapper" style={{ display: pdfLoading[item.id] ? 'none' : 'block' }}>
                              <object
                                data={`${getFileUrl(item.file)}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                                type="application/pdf"
                                className="pdf-viewer-object"
                                aria-label={item.title}
                                onLoad={() => handlePdfLoad(item.id)}
                                onError={() => handlePdfError(item.id)}
                              >
                                <div className="pdf-fallback">
                                  <p className="mb-3">Your browser does not support inline PDF viewing.</p>
                                  <div className="pdf-action-buttons">
                                    <a
                                      href={getFileUrl(item.file)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-primary me-2"
                                      download
                                    >
                                      <i className="fas fa-download me-2"></i>Download PDF
                                    </a>
                                    <a
                                      href={getFileUrl(item.file)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-outline-primary"
                                    >
                                      <i className="fas fa-external-link-alt me-2"></i>Open in New Window
                                    </a>
                                  </div>
                                </div>
                              </object>
                            </div>
                          ) : (
                            // Standard iframe for other browsers
                            <div className="pdf-viewer-wrapper" style={{ display: pdfLoading[item.id] ? 'none' : 'block' }}>
                              <iframe
                                src={`${getFileUrl(item.file)}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                                className="pdf-viewer-iframe"
                                title={item.title}
                                onLoad={() => handlePdfLoad(item.id)}
                                onError={() => handlePdfError(item.id)}
                                allow="fullscreen"
                              >
                                <div className="pdf-fallback">
                                  <p className="mb-3">Your browser does not support PDFs.</p>
                                  <div className="pdf-action-buttons">
                                    <a
                                      href={getFileUrl(item.file)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-primary me-2"
                                      download
                                    >
                                      <i className="fas fa-download me-2"></i>Download PDF
                                    </a>
                                    <a
                                      href={getFileUrl(item.file)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-outline-primary"
                                    >
                                      <i className="fas fa-external-link-alt me-2"></i>Open in New Window
                                    </a>
                                  </div>
                                </div>
                              </iframe>
                            </div>
                          )}
                        </div>
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

