import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
  const facultyMembers = [
    // Leadership Team (Same as Home Page)
    {
      id: 1,
      name: 'Manish Kumar',
      position: 'Managing Director',
      image: '/image/FAC1.png'
    },
    {
      id: 2,
      name: 'Anjani Kumari',
      position: 'Principal',
      image: '/image/principle.png'
    },
    {
      id: 3,
      name: 'Rashmi Kumari',
      position: 'Manager',
      image: '/image/FAC13.png'
    },
    // Faculty Members from Images
    {
      id: 4,
      name: 'Raj Kumar Singh',
      position: 'Teacher',
      image: '/image/FAC2.jpeg'
    },
    {
      id: 5,
      name: 'Krishna Kumar',
      position: 'Science Teacher',
      image: '/image/FAC3.png'
    },
    {
      id: 6,
      name: 'M.N Singh',
      position: 'English Teacher',
      image: '/image/FAC4.png'
    },
    {
      id: 7,
      name: 'Richa Pushpraj',
      position: 'General Knowledge Teacher',
      image: '/image/FAC5.png'
    },
    {
      id: 8,
      name: 'Shivam Kumar',
      position: 'Sports Teacher',
      image: '/image/FAC22.png'
    },
    {
      id: 9,
      name: 'Vinita Pandey',
      position: 'Snaskrit Teacher',
      image: '/image/FAC7.png'
    },
    {
      id: 10,
      name: 'Prerna Kumari',
      position: 'S.S.T Teacher',
      image: '/image/FAC8.png'
    },
    {
      id: 11,
      name: 'Kaushal Kishore',
      position: 'English Teacher',
      image: '/image/FAC9.png'
    },
    {
      id: 12,
      name: 'Sanjay Suman',
      position: 'Science Teacher',
      image: '/image/FAC10.png'
    },
    {
      id: 13,
      name: 'Anand Kumar Singh',
      position: 'Science Teacher',
      image: '/image/FAC11.png'
    },
    {
      id: 14,
      name: 'Sanjiv Singh',
      position: 'Hindi Teacher',
      image: '/image/FAC12.png'
    },
    {
      id: 15,
      name: 'Nivritti Singh',
      position: 'General Knowledge Teacher',
      image: '/image/FAC14.png'
    },
    {
      id: 16,
      name: 'Dilip Singh',
      position: 'Maths Teacher',
      image: '/image/FAC16.png'
    },
    {
      id: 17,
      name: 'Ram Naresh Singh',
      position: 'Hindi Teacher',
      image: '/image/FAC18.png'
    },
    {
      id: 18,
      name: 'Sandhya Kumari',
      position: 'Snaskrit Teacher',
      image: '/image/FAC19.png'
    },
    {
      id: 19,
      name: 'Vicky Kumar',
      position: 'Computer Teacher',
      image: '/image/FAC21.jpeg'
    }
  ];

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="faculty-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="faculty-hero-content"
          >
            <h1>Meet Our Faculty</h1>
            <p>Dedicated Educators Shaping Future Leaders</p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-section">
        <div className="container py-5">
          <div className="row">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="col-lg-3 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="faculty-card uniform-card text-center p-4 shadow rounded">
                  <div className="faculty-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      // --- THIS IS THE SAFER onERROR FIX ---
                      onError={(e) => {
                        e.target.onerror = null; // Prevents loops
                        e.target.src = '/image/placeholder.png'; // Use a safe fallback
                      }}
                    />
                  </div>
                  <h5 className="mb-2">{member.name}</h5>
                  <h6 className="text-primary mb-2">{member.position}</h6>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;