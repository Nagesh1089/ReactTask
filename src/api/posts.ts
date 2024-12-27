import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  return axios.get(BASE_URL);
};

export const fetchPostById = async (id: number) => {
  return axios.get(`${BASE_URL}/${id}`);
};
