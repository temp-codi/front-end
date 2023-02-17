import { instance } from './instance';
import { Ilocation } from '@/_types';

export const geolocationApi = async ({ lat, lon }: Ilocation) => {
    if (lat !== '' && lon !== '') {
        const { data } = await instance.post('geolocation', {
            lat,
            lon,
        });
        return data;
    } else {
        return null;
    }
};
