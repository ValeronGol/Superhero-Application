import axios from 'axios';

axios.defaults.baseURL = 'https://superheros-app-valeron.herokuapp.com/api/';

export const fetchHeros = async (page = 1) => {
  const response = await axios.get(`/superhero?page=${page}`);
  return response.data.data.result;
};
