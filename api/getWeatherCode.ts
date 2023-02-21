import { instance } from './instance';

interface IProps {
    code: number;
}

export const getWeatherCode = async ({ code }: IProps) => {
    if (code) {
        const data = await instance.post('getCode', { code });
        return data;
    } else {
        return null;
    }
};
