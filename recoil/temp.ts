import { atom } from 'recoil';
import { v1 } from 'uuid';
import { ITemperatureData } from '@/_types';

export const tempAtom = atom({
    key: `temp_atom/${v1()}`,
    default: null,
});

export const tempClassified = atom({
    key: `temp_classified_atom/${v1()}`,
    default: null || ({} as ITemperatureData),
});
