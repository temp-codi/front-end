import { instance } from './instance';
import { IGoogleImg } from '@/_types';

export const googleImgApi = async ({ keyword, pageNo, gender }: IGoogleImg) => {
  const { data } = await instance.post('googleImg', {
    keyword,
    pageNo,
    gender,
  });

  return data;
};
