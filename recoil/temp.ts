import { atom } from 'recoil';
import { v1 } from 'uuid';
import { ITemperatureData, IApiWeatherData } from '@/_types';

export const tempAtom = atom({
    key: `temp_atom/${v1()}`,
    default: null || ({} as IApiWeatherData),
});

export const tempClassified = atom({
    key: `temp_classified_atom/${v1()}`,
    default: null || ({} as ITemperatureData),
});
