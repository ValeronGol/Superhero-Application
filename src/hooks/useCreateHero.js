import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

const createHero = async ({ nickname, images }) => {
  const body = {
    nickname: nickname,
    images: images,
  };
  const response = await axios.post(`/superhero`, body);
  const { data } = response;
  return data.data;
};

export const useCreateHero = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(createHero, {
    onSuccess() {
      queryClient.invalidateQueries('/heros');
      toast.success('Hero create');
    },
  });
  return {
    createHero: mutateAsync,
  };
};
