import { $authHost, $host } from '.';

export const addComicsToBasket = async (comicId, userId) => {
  const { data } = await $authHost.post('api/basket', {
    comicId: comicId,
    userId: userId,
  });
  return data;
};

export const fetchAllComics = async (id) => {
  const { data } = await $authHost.get('api/basket', {
    params: { userId: id },
  });
  return data;
};

export const deleteComicsInBasket = async (id) => {
  const { data } = await $authHost.delete('api/basket', {
    params: {
      comicsId: id,
    },
  });
  console.log(data);
  return data;
};
