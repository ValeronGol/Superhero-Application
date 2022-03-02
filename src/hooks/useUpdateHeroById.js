import { updateSuperherotById } from '../helpers/fetchHeros';
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

export const useUpdateHeroById = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(updateSuperherotById, {
    onSuccess() {
      queryClient.invalidateQueries('/heros');
      toast.success('Hero update');
    },
  });
  return {
    updateHero: mutateAsync,
  };
};
