import axios from 'axios';

// TODO 6 (deployment): this must point at your DEPLOYED backend after deployment.
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:5006'}/api/items`,
});

export default API;
