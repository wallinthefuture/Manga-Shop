import { $authHost, $host } from '.';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', {
    name: type,
  });

  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createGenre = async (genre) => {
  const { data } = await $authHost.post('api/genre', {
    name: genre,
  });

  return data;
};

export const fetchGenre = async () => {
  const { data } = await $host.get('api/genre');
  return data;
};

const config = {
  headers: { 'content-type': 'multipart/form-data' },
};

export const createComics = async (comics) => {
  const { data } = await $authHost.post('api/comics', comics, config);

  return data;
};

export const fetchComics = async (typeId, page, limit = 5) => {
  const { data } = await $host.get('api/comics', {
    params: {
      typeId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneComics = async (id) => {
  const { data } = await $host.get('api/comics/' + id);
  return data;
};
