import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { tempAtom } from '@/recoil/temp';
import { IWeatherData } from '@/_types';

export const useTempDetail = () => {
    const [todayWeather, setTodayWeather] = useState<IWeatherData>();

    const weatherDetail = useRecoilValue(tempAtom);

    useEffect(() => {
        if (weatherDetail) {
            const now = new Date();
            const { list } = weatherDetail;
            if (list?.length > 0) {
                for (let i = 0; i < list.length; i++) {
                    const dtInMilliseconds = list[i].dt * 1000; // Convert dt to milliseconds
                    const dt = new Date(dtInMilliseconds); // Convert dt to a Date object
                    if (dt <= now) {
                        setTodayWeather(list[i]);
                    } else {
                        break;
                    }
                }
            }
        }
    }, [weatherDetail]);

    return { todayWeather, weatherDetail };
};
