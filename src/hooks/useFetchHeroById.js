import { useQuery } from 'react-query';
import { getSuperheroById } from 'helpers/fetchHeros';
import toast from 'react-hot-toast';

export const useFetchHeroById = id => {
  const { data, isLoading } = useQuery(
    ['/heros', id],
    () => getSuperheroById(id),
    {
      onSuccess() {
        toast.success('Hero loaded');
      },
    },
  );
  return {
    data,
    isLoading,
  };
};
