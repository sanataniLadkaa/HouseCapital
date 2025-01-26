import axios from 'axios';

// Define the base URL of your backend
const api = axios.create({
  baseURL: 'https://house-capital.vercel.app/' || 'http://localhost:5000/api',
  timeout: 5000, // Optional: Set a timeout
});

// You can also add request/response interceptors for logging or error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
