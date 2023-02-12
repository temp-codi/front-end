import { atom } from 'recoil';
import { v1 } from 'uuid';
import { IGoogleImgOutput } from '@/_types';
const googleInfo: IGoogleImgOutput = {
  googleInfo: [
    {
      img: '',
      siteLink: '',
    },
  ],
};
export const googleImgAtom = atom({
  key: `googleImg_atom/${v1()}`,
  default: googleInfo,
});
