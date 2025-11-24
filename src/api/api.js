import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

export const loginUser = (data) => API.post('/users/login', data);
export const registerUser = (data) => API.post('/users/register', data);
export const fetchEvents = () => API.get('/events');
export const createEvent = (data) => API.post('/events', data);
export const getEventById = (id) => API.get(`/events/${id}`);
