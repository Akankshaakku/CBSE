import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedBlog) {
        setSelectedBlog(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedBlog]);

  const blogPosts = [
    {
      id: 1,
      title: 'Grand Annual Function: Celebrating Excellence',
      date: 'Mar 17, 2024',
      image: '/image/SE1.jpeg',
      excerpt: 'Grand Annual Function with Chief Guest: Suresh Kumar Sharma, Former Member of the Bihar Legislative Assembly',
      content: 'Our annual function was a grand success with participation from students, parents, and distinguished guests. The event showcased the talents and achievements of our students throughout the year. The Chief Guest, Suresh Kumar Sharma, Former Member of the Bihar Legislative Assembly, graced the occasion and delivered an inspiring speech about the importance of education in shaping young minds. Students performed various cultural programs including dances, songs, and skits that highlighted the rich cultural heritage of our nation. The event also included prize distribution for academic excellence, sports achievements, and extracurricular activities. Parents expressed their appreciation for the holistic development approach followed by the school. The function concluded with a vote of thanks and a commitment to continue the tradition of excellence in education. This annual celebration not only recognizes student achievements but also strengthens the bond between the school community, fostering a sense of pride and belonging among all stakeholders.',
      author: 'School Administration'
    },
    {
      id: 2,
      title: 'Inspiring Innovation: Annual Science Exhibition',
      date: 'Feb 28, 2024',
      image: '/image/SE2.png',
      excerpt: 'Students showcase innovative science projects and creative solutions',
      content: 'The annual science exhibition was a platform for our students to demonstrate their scientific knowledge and creativity. Various projects were displayed covering topics from physics, chemistry, and biology. Students from classes 6 to 10 participated enthusiastically, presenting projects on renewable energy, environmental conservation, and technological innovations. The exhibition featured working models of solar-powered devices, water purification systems, and innovative solutions to everyday problems. Judges from local universities and industry experts evaluated the projects based on innovation, scientific accuracy, presentation, and practical application. Several projects received special recognition for their originality and potential real-world impact. The event also included interactive sessions where students explained their projects to visitors, enhancing their communication skills. Teachers guided students throughout the process, emphasizing the importance of scientific inquiry and critical thinking. The exhibition concluded with an award ceremony where winners were felicitated. This event not only promotes scientific temper among students but also encourages them to think creatively and apply their knowledge to solve real-world challenges.',
      author: 'Science Department'
    },
    {
      id: 3,
      title: 'Farewell Class 10: Wishing Bright Futures',
      date: 'Mar 15, 2023',
      image: '/image/SE3.png',
      excerpt: 'Celebrating achievements and cherished memories of our graduating class',
      content: 'We bid farewell to our Class 10 students with a memorable event filled with emotions, celebrations, and best wishes for their bright future ahead. The farewell ceremony was organized in the school auditorium with full participation from teachers, students, and parents. The program began with a welcome address by the Principal, followed by speeches from teachers who shared memorable moments and life lessons with the outgoing students. Students performed emotional farewell songs and presented skits depicting their school life experiences. The highlight of the event was the distribution of certificates and mementos to mark the completion of their secondary education. Parents expressed their gratitude to the faculty for nurturing their children over the years. The outgoing students shared their future aspirations and thanked their teachers for the guidance and support. The ceremony concluded with a group photograph and a promise to stay connected with the school. This farewell event symbolizes the transition from school life to higher education and professional careers, while cherishing the bonds formed during their time at Children\'s Paradise Public School.',
      author: 'School Administration'
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="blog-hero-content"
          >
            <h1>School Blog</h1>
            <p>Latest News and Updates from CPPS</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="col-lg-4 col-md-6 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="blog-card">
                  <div className="blog-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                      onError={(e) => {
                        e.target.src = '/image/PG1.jpeg';
                      }}
                    />
                    <div className="blog-date-badge">
                      <i className="fas fa-calendar-alt me-2"></i>
                      {post.date}
                    </div>
                  </div>
                  <div className="blog-content">
                    <h5 className="blog-title">{post.title}</h5>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <small className="text-muted">
                        <i className="fas fa-user me-2"></i>
                        {post.author}
                      </small>
                      <button
                        className="btn btn-link-new"
                        onClick={() => setSelectedBlog(post)}
                      >
                        Read More <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedBlog && (
          <motion.div
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="blog-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedBlog(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="modal-image"
                onError={(e) => {
                  e.target.src = '/image/PG1.jpeg';
                }}
              />
              <div className="modal-content">
                <h2>{selectedBlog.title}</h2>
                <div className="modal-meta">
                  <span>
                    <i className="fas fa-calendar-alt me-2"></i>
                    {selectedBlog.date}
                  </span>
                  <span>
                    <i className="fas fa-user me-2"></i>
                    {selectedBlog.author}
                  </span>
                </div>
                <p>{selectedBlog.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;

