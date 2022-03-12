import { updateSuperherotById } from '../helpers/fetchHeros';
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';

export const useUpdateHeroById = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(updateSuperherotById, {
    onMutate: async newHero => {
      await queryClient.cancelQueries('/heros');
      const previousHero = queryClient.getQueryData(['/heros', newHero.id]);
      queryClient.setQueryData(['/heros', newHero.id], newHero);

      return { previousHero, newHero };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['/heros', context.id], context.previousTodo);
    },
    onSettled: newHero => {
      queryClient.invalidateQueries(['/heros', newHero.id]);
      toast.success('Hero update');
    },
  });
  return {
    updateHero: mutateAsync,
  };
};
