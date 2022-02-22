import { useQuery } from 'react-query';
import { fetchHeroById } from 'helpers/fetchHeros';

export const useFetchHeroById = id => {
  const { data, isLoading } = useQuery(['/heros', id], () => fetchHeroById(id));
  return {
    data,
    isLoading,
  };
};
