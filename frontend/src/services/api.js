import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      switch (status) {
        case 401:
          console.error('Unauthorized access');
          break;
        case 403:
          console.error('Forbidden access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API Error:', error.response.data?.message || 'An error occurred');
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('Network error - No response received');
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  testimonials: {
    getAll: (params = {}) => api.get('/testimonials', { params }),
    getById: (id) => api.get(`/testimonials/${id}`),
  },
  faculty: {
    getAll: (params = {}) => api.get('/faculty', { params }),
    getById: (id) => api.get(`/faculty/${id}`),
  },
  events: {
    getAll: (params = {}) => api.get('/events', { params }),
    getById: (id) => api.get(`/events/${id}`),
  },
  gallery: {
    getAll: (params = {}) => api.get('/gallery', { params }),
    getById: (id) => api.get(`/gallery/${id}`),
  },
  contact: {
    submit: (data) => api.post('/contact', data),
  },
  newsletter: {
    subscribe: (email) => api.post('/newsletter/subscribe', { email }),
    unsubscribe: (email) => api.post('/newsletter/unsubscribe', { email }),
  },
};

export default api;


