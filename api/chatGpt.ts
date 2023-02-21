import { instance } from './instance';
import { IchatGpt, IchatGptArr } from '@/_types';

export const chatGptApi = async ({
    weather,
    gender,
}: IchatGpt): Promise<IchatGptArr> => {
    if (weather && gender) {
        const { data } = await instance.post('openai', {
            weather,
            gender,
        });

        return data;
    } else {
        return null;
    }
};
