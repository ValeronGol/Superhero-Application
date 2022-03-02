import axios from 'axios';

axios.defaults.baseURL = 'https://superheros-app-valeron.herokuapp.com/api/';

export const listSuperhero = async page => {
  const response = await axios.get(`/superhero?page=${page}`);
  return response.data.data.result;
};

export const getSuperheroById = async id => {
  const response = await axios.get(`/superhero/${id}`);
  return response.data.data.result;
};

export const removeSuperhero = async id => {
  const resp = await axios.delete(`/superhero/${id}`);
  return resp.data.data.result;
};

export const updateSuperherotById = async id => {
  const resp = await axios.put(`/superhero/${id}`);
  return resp.data.data.result;
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
  const response = await axios.post(`/superhero`, body);
  const { data } = response;
  return data.data;
};
