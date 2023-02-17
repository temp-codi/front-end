import { atom } from 'recoil';
import { v1 } from 'uuid';

export const darkAtom = atom({
    key: `dark_atom/${v1()}`,
    default: true as boolean,
});
