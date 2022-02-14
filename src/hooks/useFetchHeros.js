import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { fetchHeros } from 'helpers/fetchHeros';

export const useFetchHeros = page => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ['/hero', page],
    () => fetchHeros(page),
    {
      onSuccess() {
        toast.success('Heros loaded');
      },
    },
  );

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
