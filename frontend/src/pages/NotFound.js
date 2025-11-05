import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e94560 100%)',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          style={{
            fontSize: '8rem',
            fontWeight: 900,
            color: '#e94560',
            marginBottom: '1rem',
            lineHeight: 1
          }}
        >
          404
        </motion.div>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#2c3e50',
          marginBottom: '1rem'
        }}>
          Page Not Found
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#7f8c8d',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#e94560',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(233, 69, 96, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d63447';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 69, 96, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e94560';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(233, 69, 96, 0.3)';
            }}
          >
            <i className="fas fa-home me-2"></i>
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'white',
              color: '#e94560',
              border: '2px solid #e94560',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e94560';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#e94560';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-arrow-left me-2"></i>
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
