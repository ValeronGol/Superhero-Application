import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

const deleteHero = async id => {
  const resp = await axios.delete(`/superhero/${id}`);
  return resp.data.data.result;
};

export const useDeleteHero = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(deleteHero, {
    onSuccess() {
      queryClient.invalidateQueries('/heros');
      toast.success('Heros deleted');
    },
  });
  return {
    deleteHero: mutateAsync,
  };
};
