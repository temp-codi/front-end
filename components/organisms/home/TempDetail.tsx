import React from 'react';
import { useTempDetail } from '@/hooks';
import { Grid } from '@/components/atoms';
import { NotPollutionBox, PollutionBox } from '@/components/molecules';
import { IWeatherData } from '@/_types';

const TempDetail = () => {
    const {
        todayWeather,
        weatherDetail: { pollution_en },
    } = useTempDetail();
    if (todayWeather !== undefined) {
        return (
            <Grid gridClasses="grid-cols-2 gap-4" className="w-full">
                {Object.keys(todayWeather).map((key: string, idx) => {
                    const weatherKey = key as keyof IWeatherData;
                    console.log(weatherKey);
                    if (
                        key === 'feels_like' ||
                        key === 'humidity' ||
                        key === 'cloud_in_percentage' ||
                        key === 'wind_speed'
                    ) {
                        return (
                            <NotPollutionBox
                                key={idx}
                                weatherKey={weatherKey}
                                todayWeather={todayWeather}
                            />
                        );
                    }
                })}
                <PollutionBox pollution_en={pollution_en} />
            </Grid>
        );
    } else {
        return <></>;
    }
};

export default TempDetail;
