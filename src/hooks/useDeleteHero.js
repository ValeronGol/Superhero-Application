import { removeSuperhero } from '../helpers/fetchHeros';
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

export const useDeleteHero = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(removeSuperhero, {
    onSuccess() {
      queryClient.invalidateQueries('/heros');
      toast.success('Hero deleted');
    },
  });
  return {
    deleteHero: mutateAsync,
  };
};
