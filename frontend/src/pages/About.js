import React from 'react';
import { motion } from 'framer-motion';
// --- FIX: Added import for <Link> ---
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Embracing modern teaching methods and technology' },
    { icon: 'fa-heart', title: 'Care', desc: 'Nurturing every student with compassion and support' },
    { icon: 'fa-trophy', title: 'Excellence', desc: 'Striving for the highest standards in education' },
    { icon: 'fa-handshake', title: 'Integrity', desc: 'Building trust through honesty and transparency' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <h1>About Children's Paradise Public School</h1>
            <p>Nurturing Excellence, Building Futures</p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <motion.div
              className="col-lg-6 col-md-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-image">
                <img
                  src="/image/about-us.jpeg"
                  alt="School Building"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/image/placeholder.png";
                  }}
                />
                <div className="image-badge">
                  <i className="fas fa-school me-2"></i>
                  <span>Our School</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 col-md-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-content">
                <h2>Welcome to CPPS</h2>
                <p>
                  Children's Paradise Public School is a premier educational institution located in Muzaffarpur, Bihar.
                  We are committed to providing quality education that nurtures creativity, critical thinking, and character
                  development in our students.
                </p>
                <p>
                  With a team of dedicated educators, state-of-the-art facilities, and a nurturing environment, we aim to
                  provide a learning experience that goes beyond textbooks. Our innovative curriculum is designed to inspire
                  curiosity, foster creativity, and build critical thinking skills.
                </p>
                
                {/* --- FIX 3: Changed <a> tag to <Link> for React routing --- */}
                <Link to="/contact" className="btn btn-primary-new mt-3">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mission-card">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide a nurturing environment where students can develop their full potential academically,
                  socially, and emotionally while building strong moral values and character.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="vision-card">
                <div className="card-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be a leading educational institution that inspires curiosity, fosters creativity, and prepares
                  students to become responsible citizens and future leaders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Our Core Values</h2>
            <p className="section-subtitle-new">Principles that guide our educational journey</p>
          </motion.div>

          <div className="row">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-card">
                  <div className="value-icon">
                    {/* --- FIX 4: Changed single quotes to backticks (`) for template literal --- */}
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <h5>{value.title}</h5>
                  <p>{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CPPS */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Why Choose CPPS?</h2>
            <p className="section-subtitle-new">Excellence in every aspect of education</p>
          </motion.div>

          <div className="row">
            {[
              { icon: 'fa-users', title: 'Expert Faculty', desc: 'Experienced and qualified educators' }, // 'fa-users-tie' might be Pro
              { icon: 'fa-building', title: 'Modern Infrastructure', desc: 'State-of-the-art facilities' },
              { icon: 'fa-brain', title: 'Holistic Development', desc: 'Academic and personal growth' },
              { icon: 'fa-shield-alt', title: 'Safe Environment', desc: 'Secure and nurturing campus' },
              { icon: 'fa-chart-line', title: 'Academic Excellence', desc: '98% pass rate consistently' },
              { icon: 'fa-handshake', title: 'Parent Engagement', desc: 'Regular communication and support' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="why-card">
                  <div className="why-icon">
                    {/* --- FIX 4: Changed single quotes to backticks (`) for template literal --- */}
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;