import axios from 'axios';
import { toSnakeCase, toCamelCase } from '@/utils/generic';

// Create axios instance with default config
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - convert camelCase to snake_case
api.interceptors.request.use(
  config => {
    // Initialize headers if it doesn't exist
    if (!config.headers) {
      config.headers = {};
    }

    // Add auth token if available
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Convert request data from camelCase to snake_case
    if (config.data) {
      config.data = toSnakeCase(config.data);
    }

    // Convert query params from camelCase to snake_case
    if (config.params) {
      config.params = toSnakeCase(config.params) as Record<string, unknown>;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor - convert snake_case to camelCase
api.interceptors.response.use(
  response => {
    // Convert response data from snake_case to camelCase
    if (response.data) {
      response.data = toCamelCase(response.data);
    }
    return response;
  },
  error => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Redirect to login page
        window.location.href = '/login';
      }
    }

    // Convert error response data if it exists
    if (error.response?.data) {
      error.response.data = toCamelCase(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default api;
