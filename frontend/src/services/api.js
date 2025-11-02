import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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


