import axios from 'axios';
// Link da API
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;