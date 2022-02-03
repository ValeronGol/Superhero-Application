import { useRef } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://superheros-app-valeron.herokuapp.com/api/';

const fetchHeros = async () => {
  const response = await axios.get('/superhero');
  return response.data.data.result;
};

export const useFetchHeros = () => {
  const hasFetched = useRef(false);
  const { data } = useQuery('/heros', fetchHeros, {
    onSuccess() {
      if (!hasFetched.current) {
        toast.success('Heros loaded');
        hasFetched.current = true;
      }
    },
  });

  return {
    heros: data,
  };
};
