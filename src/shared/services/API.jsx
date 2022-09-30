import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '29218892-5c728a61ff7c291bb1551bea9',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const fetchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: { q, page },
  });

  return data;
};
