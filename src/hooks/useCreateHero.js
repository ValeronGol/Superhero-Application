import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

const createHero = async ({
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  images,
}) => {
  const body = {
    nickname: nickname,
    real_name: real_name,
    origin_description: origin_description,
    superpowers: superpowers,
    catch_phrase: catch_phrase,
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
