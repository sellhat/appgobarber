import axios from 'axios';

const api = axios.create({
  // Change 'localhost' to your system's ip (local ip pc)
  baseURL: 'http://localhost:3333',
});

export default api;
