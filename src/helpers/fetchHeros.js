import axios from 'axios';

axios.defaults.baseURL = 'https://superheros-app-valeron.herokuapp.com/api/';

export const listSuperhero = async page => {
  const { data } = await axios.get(`/superhero?page=${page}`);
  return data.data.result;
};

export const getSuperheroById = async id => {
  const { data } = await axios.get(`/superhero/${id}`);
  return data.data.result;
};

export const removeSuperhero = async id => {
  const { data } = await axios.delete(`/superhero/${id}`);
  return data.data.result;
};

export const updateSuperherotById = async (id, updateHero) => {
  const { data } = await axios.put(`/superhero/${id}`, updateHero);
  return data.data;
};

export const createHero = async ({
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
  const { data } = await axios.post(`/superhero`, body);
  return data.data;
};
