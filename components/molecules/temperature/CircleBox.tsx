/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Flex } from '@/components/atoms/index';
import { getWeatherCode } from '@/api/getWeatherCode';

interface IProps {
    averageTemperature: number;
    weatherId: number;
}

const CircleBox = ({ averageTemperature, weatherId }: IProps) => {
    const [weather, setWeather] = useState<any>(0);

    useEffect(() => {
        const handleApi = async () => {
            const res = await getWeatherCode({ code: weatherId });
            if (res) {
                const {
                    data: { data },
                } = res;
                console.log(data);
                setWeather(data);
            }
        };
        handleApi();
    }, [weatherId]);

    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <Flex className="w-36 h-36 rounded-full bg-gray-500">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="sdf" />
        </Flex>
    );
};

export default CircleBox;
