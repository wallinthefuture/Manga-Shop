import { $authHost, $host } from '.';

export const createPDFFile = async () => {
  const { data } = await $authHost.get('api/pdf_create');
  return data;
};
