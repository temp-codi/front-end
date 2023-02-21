import React from 'react';
import { IWeatherData } from '@/_types';
interface IProps {
    weatherKey: string;
    todayWeather: IWeatherData;
}
const NotPollutionBox = ({ weatherKey, todayWeather }: IProps) => {
    return (
        <div className="w-64 h-64 rounded-lg bg-gray-300">
            {weatherKey}: {(todayWeather as any)[weatherKey]}
        </div>
    );
};

export default NotPollutionBox;
