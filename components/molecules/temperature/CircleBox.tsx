/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@/components/atoms/index';
import { getWeatherCode } from '@/api/getWeatherCode';

interface IProps {
    averageTemperature: number;
    weatherId: number;
}

const CircleBox = ({ averageTemperature, weatherId }: IProps) => {
    const [weather, setWeather] = useState<any>(0);

    const getIcon = (icon: string) => {
        const firstIcon = icon.split(' ')[0];
        return firstIcon;
    };

    useEffect(() => {
        const handleApi = async () => {
            const res = await getWeatherCode({ code: weatherId });
            if (res) {
                const {
                    data: { data },
                } = res;
                const updatedIcon = getIcon(data.icon);
                setWeather({ ...data, icon: updatedIcon });
            }
        };
        handleApi();
    }, [weatherId]);

    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <Flex
            align="center"
            justify="center"
            direction="col"
            className="w-36 h-36 rounded-full bg-gray-500 overflow-hidden"
        >
            <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather Icon"
                style={{ height: '30px' }}
            />
            <Text as="p" className="text-sm">
                Desc: {weather.desc}
            </Text>
        </Flex>
    );
};

export default CircleBox;
