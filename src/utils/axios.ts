import axios, { AxiosError } from 'axios';

// Configure axios defaults for the entire application
axios.defaults.withCredentials = true;

// Add request interceptor for debugging (optional)
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle global auth errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Only redirect to login if we're on an admin page
      if (window.location.pathname.startsWith('/admin') && 
          !window.location.pathname.includes('/login')) {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

export { AxiosError };
export default axios;
