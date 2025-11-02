import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Array of school images for rotating background
  const heroImages = [
    '/image/front-image1.jpeg',
    '/image/front-image2.jpeg',
    '/image/front-image3.jpeg',
    '/image/PG1.jpeg',
    '/image/PG2.jpeg',
    '/image/PG3.jpeg',
    '/image/Photo1.jpeg',
    '/image/Photo2.jpg',
    '/image/Photo3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFacility, setSelectedFacility] = useState(null);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedFacility) {
        setSelectedFacility(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedFacility]);

  const features = [
    {
      icon: 'fa-book-open',
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed to develop critical thinking and analytical skills'
    },
    {
      icon: 'fa-chalkboard-user',
      title: 'Experienced Faculty',
      description: 'Highly qualified educators with proven track record in student development'
    },
    {
      icon: 'fa-microscope',
      title: 'Advanced Laboratories',
      description: 'State-of-the-art science and computer labs for practical learning'
    },
    {
      icon: 'fa-library',
      title: 'Digital Library',
      description: 'Comprehensive collection of books and online learning resources'
    },
    {
      icon: 'fa-dumbbell',
      title: 'Sports & Activities',
      description: 'Holistic development through sports, arts, and extracurricular programs'
    },
    {
      icon: 'fa-shield',
      title: 'Safe Campus',
      description: 'Secure and nurturing environment with modern safety infrastructure'
    }
  ];

  const highlights = [
    { number: '500+', label: 'Students Enrolled', icon: 'fa-users' },
    { number: '50+', label: 'Dedicated Faculty', icon: 'fa-chalkboard-user' },
    { number: '20+', label: 'Years of Excellence', icon: 'fa-trophy' },
    { number: '98%', label: 'Pass Rate', icon: 'fa-chart-line' }
  ];

  const facilities = [
    {
      image: '/image/computer-lab.png',
      title: 'Computer Lab',
      desc: 'Latest computers and programming software'
    },
    {
      image: '/image/physics-lab.png',
      title: 'Physics Lab',
      desc: 'State-of-the-art laboratory with modern equipment'
    },
    {
      image: '/image/chemistry-lab.png',
      title: 'Chemistry Lab',
      desc: 'Advanced chemistry lab for practical learning'
    },
    {
      image: '/image/library.png',
      title: 'Library',
      desc: 'Extensive collection of books and resources'
    },
    {
      image: '/image/doubt.png',
      title: 'Doubt Class',
      desc: 'Interactive doubt clearing sessions'
    },
    {
      image: '/image/bus.png',
      title: 'Transport',
      desc: 'Safe and reliable transportation service'
    },
    {
      image: '/image/yoga.png',
      title: 'Yoga Class',
      desc: 'Physical fitness and wellness programs'
    },
    {
      image: '/image/smart-class.jpeg',
      title: 'Smart Class',
      desc: 'Interactive digital learning environment'
    }
  ];

  const events = [
    { date: 'Mar 17, 2024', title: 'Grand Annual Function', desc: 'Chief Guest: Suresh Kumar Sharma, Former MLA' },
    { date: 'Feb 28, 2024', title: 'Science Exhibition', desc: 'Students showcase innovative science projects' },
    { date: 'Mar 15, 2023', title: 'Class 10 Farewell', desc: 'Celebrating achievements and cherished memories' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      text: 'CPPS has transformed my child\'s academic journey. The faculty is exceptional and the facilities are world-class.',
      image: '/image/User1.png'
    },
    {
      name: 'Priya Singh',
      role: 'Parent',
      text: 'The holistic approach to education here is remarkable. My daughter has grown both academically and personally.',
      image: '/image/User2.png'
    },
    {
      name: 'Amit Sharma',
      role: 'Parent',
      text: 'Best decision we made for our son\'s education. The school truly cares about each student\'s development.',
      image: '/image/User1.png'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section-new"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 75, 132, 0.9) 0%, rgba(44, 62, 80, 0.9) 50%, rgba(52, 152, 219, 0.8) 100%), url(${heroImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content-wrapper">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text-content"
              >
                <h1 className="hero-title-new">
                  Excellence in Education, <span className="gradient-text">Character Building</span>
                </h1>
                <p className="hero-subtitle-new">
                  At Children's Paradise Public School, we are committed to nurturing well-rounded individuals
                  through quality education, modern facilities, and dedicated mentorship.
                </p>
                <div className="hero-buttons-new">
                  <Link to="/about" className="btn btn-primary-new">
                    Discover More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                  <Link to="/contact" className="btn btn-secondary-new">
                    Get in Touch <i className="fas fa-phone ms-2"></i>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image-wrapper"
              >
                <div className="hero-image-container">
                  <img
                    src="/image/front-image1.jpeg"
                    alt="CPPS School"
                    className="hero-image-main"
                    onError={(e) => {
                      e.target.src = '/image/PG1.jpeg';
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="stat-number">{item.number}</h3>
                  <p className="stat-label">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-new">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Why Choose CPPS?</h2>
            <p className="section-subtitle-new">
              We provide comprehensive education with modern facilities and experienced faculty
            </p>
          </motion.div>

          <div className="row">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card-new">
                  <div className="feature-icon-new">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Meet Our Leadership</h2>
            <p className="section-subtitle-new">
              Dedicated leaders guiding our institution towards excellence
            </p>
          </motion.div>

          <div className="row justify-content-center">
            <motion.div
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="faculty-card text-center p-4 shadow rounded">
                <div className="faculty-image-wrapper">
                  <img
                    src="/image/FAC1.png"
                    alt="Manish Kumar"
                    className="img-fluid rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/image/placeholder.png';
                    }}
                  />
                </div>
                <h5 className="mb-2">Manish Kumar</h5>
                <h6 className="text-primary mb-2">Managing Director</h6>
                <div className="faculty-social mt-3">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="faculty-card text-center p-4 shadow rounded">
                <div className="faculty-image-wrapper">
                  <img
                    src="/image/principle.png"
                    alt="Anjani Kumari"
                    className="img-fluid rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/image/placeholder.png';
                    }}
                  />
                </div>
                <h5 className="mb-2">Anjani Kumari</h5>
                <h6 className="text-primary mb-2">Principal</h6>
                <div className="faculty-social mt-3">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="faculty-card text-center p-4 shadow rounded">
                <div className="faculty-image-wrapper">
                  <img
                    src="/image/FAC13.png"
                    alt="Rashmi Kumari"
                    className="img-fluid rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/image/placeholder.png';
                    }}
                  />
                </div>
                <h5 className="mb-2">Rashmi Kumari</h5>
                <h6 className="text-primary mb-2">Manager</h6>
                <div className="faculty-social mt-3">
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Facilities Section */}
      <section id="facilities" className="facilities-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Explore Top Facilities</h2>
            <p className="section-subtitle-new">
              CBSE-compliant infrastructure for comprehensive learning
            </p>
          </motion.div>

          <div className="row g-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="facility-card" onClick={() => setSelectedFacility(facility)} style={{ cursor: 'pointer' }}>
                  <div className="facility-image-wrapper">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="facility-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="facility-icon-fallback" style={{ display: 'none' }}>
                      <i className={`fas ${facility.title === 'Computer Lab' ? 'fa-laptop' : 
                                      facility.title === 'Library' ? 'fa-book' : 
                                      facility.title.includes('Lab') ? 'fa-flask' : 
                                      'fa-building'}`}></i>
                    </div>
                  </div>
                  <div className="facility-card-content">
                    <h5>{facility.title}</h5>
                    <p>{facility.desc}</p>
                    <div className="facility-view-more">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">What Parents Say</h2>
            <p className="section-subtitle-new">
              Hear from our satisfied parents about their experience at CPPS
            </p>
          </motion.div>

          <div className="row">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-card">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="author-info">
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title-new">Latest School Events</h2>
            <p className="section-subtitle-new">
              Celebrating achievements and creating memorable moments
            </p>
          </motion.div>

          <div className="events-timeline">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="event-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="event-marker"></div>
                <div className="event-content">
                  <span className="event-date">
                    <i className="fas fa-calendar-alt me-2"></i>
                    {event.date}
                  </span>
                  <h5>{event.title}</h5>
                  <p>{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Begin Your Child's Journey to Success</h2>
            <p>Join our community of learners and experience world-class education</p>
            <Link to="/contact" className="btn btn-light-new">
              Enroll Today <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedFacility && (
          <motion.div
            className="facility-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              className="facility-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedFacility(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="modal-image"
                onError={(e) => {
                  e.target.src = '/image/placeholder.png';
                }}
              />
              <div className="modal-content">
                <h2>{selectedFacility.title}</h2>
                <p>{selectedFacility.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
