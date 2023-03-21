import axios from 'axios';

export const http = axios.create({
  baseURL: '/',
  timeout: 5000
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return [];
  }
);
