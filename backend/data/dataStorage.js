const fs = require('fs').promises;
const path = require('path');

// Data directory path
const DATA_DIR = path.join(__dirname, 'files');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
};

// Initialize data directory
ensureDataDir();

// File paths for different data types
const DATA_FILES = {
  contacts: path.join(DATA_DIR, 'contacts.json'),
  events: path.join(DATA_DIR, 'events.json'),
  faculty: path.join(DATA_DIR, 'faculty.json'),
  gallery: path.join(DATA_DIR, 'gallery.json'),
  newsletter: path.join(DATA_DIR, 'newsletter.json'),
  testimonials: path.join(DATA_DIR, 'testimonials.json')
};

// Helper function to read data from file
const readData = async (dataType) => {
  try {
    const filePath = DATA_FILES[dataType];
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    // If file doesn't exist, return empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    console.error(`Error reading ${dataType} data:`, error);
    return [];
  }
};

// Helper function to write data to file
const writeData = async (dataType, data) => {
  try {
    const filePath = DATA_FILES[dataType];
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${dataType} data:`, error);
    return false;
  }
};

// Generate unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Contact operations
const Contact = {
  async findAll() {
    return await readData('contacts');
  },

  async findById(id) {
    const contacts = await readData('contacts');
    return contacts.find(contact => contact._id === id);
  },

  async create(data) {
    const contacts = await readData('contacts');
    const newContact = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    contacts.push(newContact);
    await writeData('contacts', contacts);
    return newContact;
  },

  async update(id, data) {
    const contacts = await readData('contacts');
    const index = contacts.findIndex(contact => contact._id === id);
    if (index === -1) return null;
    
    contacts[index] = {
      ...contacts[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('contacts', contacts);
    return contacts[index];
  },

  async delete(id) {
    const contacts = await readData('contacts');
    const filtered = contacts.filter(contact => contact._id !== id);
    await writeData('contacts', filtered);
    return filtered.length !== contacts.length;
  }
};

// Event operations
const Event = {
  async findAll() {
    return await readData('events');
  },

  async findById(id) {
    const events = await readData('events');
    return events.find(event => event._id === id);
  },

  async create(data) {
    const events = await readData('events');
    const newEvent = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    events.push(newEvent);
    await writeData('events', events);
    return newEvent;
  },

  async update(id, data) {
    const events = await readData('events');
    const index = events.findIndex(event => event._id === id);
    if (index === -1) return null;
    
    events[index] = {
      ...events[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('events', events);
    return events[index];
  },

  async delete(id) {
    const events = await readData('events');
    const filtered = events.filter(event => event._id !== id);
    await writeData('events', filtered);
    return filtered.length !== events.length;
  }
};

// Faculty operations
const Faculty = {
  async findAll() {
    return await readData('faculty');
  },

  async findById(id) {
    const faculty = await readData('faculty');
    return faculty.find(member => member._id === id);
  },

  async create(data) {
    const faculty = await readData('faculty');
    const newMember = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    faculty.push(newMember);
    await writeData('faculty', faculty);
    return newMember;
  },

  async update(id, data) {
    const faculty = await readData('faculty');
    const index = faculty.findIndex(member => member._id === id);
    if (index === -1) return null;
    
    faculty[index] = {
      ...faculty[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('faculty', faculty);
    return faculty[index];
  },

  async delete(id) {
    const faculty = await readData('faculty');
    const filtered = faculty.filter(member => member._id !== id);
    await writeData('faculty', filtered);
    return filtered.length !== faculty.length;
  }
};

// Gallery operations
const Gallery = {
  async findAll() {
    return await readData('gallery');
  },

  async findById(id) {
    const gallery = await readData('gallery');
    return gallery.find(item => item._id === id);
  },

  async create(data) {
    const gallery = await readData('gallery');
    const newItem = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    gallery.push(newItem);
    await writeData('gallery', gallery);
    return newItem;
  },

  async update(id, data) {
    const gallery = await readData('gallery');
    const index = gallery.findIndex(item => item._id === id);
    if (index === -1) return null;
    
    gallery[index] = {
      ...gallery[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('gallery', gallery);
    return gallery[index];
  },

  async delete(id) {
    const gallery = await readData('gallery');
    const filtered = gallery.filter(item => item._id !== id);
    await writeData('gallery', filtered);
    return filtered.length !== gallery.length;
  }
};

// Newsletter operations
const Newsletter = {
  async findAll() {
    return await readData('newsletter');
  },

  async findByEmail(email) {
    const subscribers = await readData('newsletter');
    return subscribers.find(sub => sub.email === email);
  },

  async create(data) {
    const subscribers = await readData('newsletter');
    // Check if email already exists
    const existing = subscribers.find(sub => sub.email === data.email);
    if (existing) {
      return existing;
    }
    
    const newSubscriber = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    subscribers.push(newSubscriber);
    await writeData('newsletter', subscribers);
    return newSubscriber;
  },

  async update(id, data) {
    const subscribers = await readData('newsletter');
    const index = subscribers.findIndex(sub => sub._id === id);
    if (index === -1) return null;
    
    subscribers[index] = {
      ...subscribers[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('newsletter', subscribers);
    return subscribers[index];
  },

  async delete(id) {
    const subscribers = await readData('newsletter');
    const filtered = subscribers.filter(sub => sub._id !== id);
    await writeData('newsletter', filtered);
    return filtered.length !== subscribers.length;
  }
};

// Testimonial operations
const Testimonial = {
  async findAll() {
    return await readData('testimonials');
  },

  async findById(id) {
    const testimonials = await readData('testimonials');
    return testimonials.find(testimonial => testimonial._id === id);
  },

  async create(data) {
    const testimonials = await readData('testimonials');
    const newTestimonial = {
      _id: generateId(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    testimonials.push(newTestimonial);
    await writeData('testimonials', testimonials);
    return newTestimonial;
  },

  async update(id, data) {
    const testimonials = await readData('testimonials');
    const index = testimonials.findIndex(testimonial => testimonial._id === id);
    if (index === -1) return null;
    
    testimonials[index] = {
      ...testimonials[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    await writeData('testimonials', testimonials);
    return testimonials[index];
  },

  async delete(id) {
    const testimonials = await readData('testimonials');
    const filtered = testimonials.filter(testimonial => testimonial._id !== id);
    await writeData('testimonials', filtered);
    return filtered.length !== testimonials.length;
  }
};

// Initialize empty files if they don't exist
const initializeDataFiles = async () => {
  try {
    await ensureDataDir();
    for (const [key, filePath] of Object.entries(DATA_FILES)) {
      try {
        await fs.access(filePath);
      } catch (error) {
        if (error.code === 'ENOENT') {
          await fs.writeFile(filePath, JSON.stringify([], null, 2), 'utf8');
          console.log(`Initialized ${key}.json file`);
        }
      }
    }
  } catch (error) {
    console.error('Error initializing data files:', error);
  }
};

// Initialize on module load
initializeDataFiles();

module.exports = {
  Contact,
  Event,
  Faculty,
  Gallery,
  Newsletter,
  Testimonial,
  DATA_DIR,
  DATA_FILES
};

