import React from 'react';
import { useRecoilValue } from 'recoil';
import { tempClassified } from '@/recoil/temp';
import { Flex } from '@/components/atoms';
import { CircleBox } from '@/components/molecules';

const TopTemperature = () => {
    const tempForecast = useRecoilValue(tempClassified);
    console.log(tempForecast);
    return (
        <Flex
            align="center"
            justify="between"
            direction="row"
            className="border"
        >
            {tempForecast.next5Days?.map((item, idx) => {
                const { averageTemperature, weatherId } = item;
                return (
                    <CircleBox
                        key={idx}
                        averageTemperature={averageTemperature}
                        weatherId={weatherId}
                    />
                );
            })}
        </Flex>
    );
};

export default TopTemperature;
