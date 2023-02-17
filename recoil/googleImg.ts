import { atom } from 'recoil';
import { v1 } from 'uuid';
import { IGoogleImgArr } from '@/_types';

export const googleImgAtom = atom({
    key: `googleImg_atom/${v1()}`,
    default: [
        {
            img: '',
            siteLink: '',
        },
    ] as IGoogleImgArr,
});

export const googleImgPropsAtoms = atom({
    key: `googleImg_props/${v1()}`,
    default: { keyword: '', pageNo: 1, gender: 'male' },
});
