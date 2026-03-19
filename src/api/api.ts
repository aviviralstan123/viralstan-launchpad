import axios from 'axios';
import type { ContactFormData } from '@/utils/helpers';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Something went wrong. Please try again.';
    return Promise.reject(new Error(message));
  }
);

export const api = {
  submitContact: (data: ContactFormData) => apiClient.post('/contact', data),
  getServices: () => apiClient.get('/services'),
  getServiceBySlug: (slug: string) => apiClient.get(`/services/${encodeURIComponent(slug)}`),
  getBlogs: () => apiClient.get('/blogs'),
  getBlogBySlug: (slug: string) => apiClient.get(`/blogs/${encodeURIComponent(slug)}`),
  getTestimonials: () => apiClient.get('/testimonials'),
};

export default api;
