import { useQuery } from 'react-query';
import { useRef } from 'react';

import toast from 'react-hot-toast';
import { fetchHeros } from 'helpers/fetchHeros';

export const useFetchHeros = page => {
  const hasFetched = useRef(false);

  const { isLoading, data, isError, error, isFetching } = useQuery(
    ['/hero', page],
    () => fetchHeros(page),
    {
      onSuccess() {
        if (!hasFetched.current) {
          toast.success('Heros loaded');
          hasFetched.current = true;
        }
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
