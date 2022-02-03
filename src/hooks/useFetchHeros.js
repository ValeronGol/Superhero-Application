import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'https://superheros-app-valeron.herokuapp.com/api/';

const fetchHeros = async () => {
  const response = await axios.get('/superhero');
  return response.data.superhero;
};

export const useFetchHeros = () => {
  const { data } = useQuery('/superhero', fetchHeros);

  return {
    superhero: data,
  };
};
