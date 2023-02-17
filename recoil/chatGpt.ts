import { atom } from 'recoil';
import { v1 } from 'uuid';
import { IchatGptArr, IchatGpt } from '@/_types';

export const chatGptAtom = atom({
    key: `chatGpt_atom/${v1()}`,
    default: {
        response: [],
    } as IchatGptArr,
});

export const chatGptPropsAtoms = atom({
    key: `chatGpt_props/${v1()}`,
    default: {} as IchatGpt,
});
