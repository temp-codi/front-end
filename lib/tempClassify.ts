import { IWeatherData, ITemperatureData } from '@/_types';

const tempClassify = (data: IWeatherData[]): ITemperatureData => {
    // Parse the dt property of the first object to get the current time
    const currentTime = new Date(data[0].dt * 1000);

    // Find the first object whose dt property is greater than the current time
    const nextData = data.find((obj) => new Date(obj.dt * 1000) > currentTime);

    // Get the current temperature and weather ID from the first object
    const currentTemperature = data[0].temp;
    const currentWeatherId = data[0].weather_id;

    // Group the remaining objects by date and calculate the average temperature and weather ID for each date
    const groupedData = data
        .slice(data.indexOf(nextData!))
        .reduce((acc, obj) => {
            const date = new Date(obj.dt * 1000).toLocaleDateString();

            if (!acc[date]) {
                acc[date] = {
                    tempSum: obj.temp,
                    weatherIds: [obj.weather_id],
                    count: 1,
                };
            } else {
                acc[date].tempSum += obj.temp;
                acc[date].weatherIds.push(obj.weather_id);
                acc[date].count++;
            }

            return acc;
        }, {} as { [key: string]: { tempSum: number; weatherIds: number[]; count: number } });

    // Calculate the average temperature and weather ID for each date and return an array of the next 5 days' data
    const next5DaysData = Object.entries(groupedData)
        .sort((a, b) => new Date(a[0]).valueOf() - new Date(b[0]).valueOf())
        .slice(0, 5)
        .map(([date, { tempSum, weatherIds, count }]) => {
            const averageTemperature = tempSum / count;
            const middleWeatherId = weatherIds[Math.floor(count / 2)];
            return { averageTemperature, weatherId: middleWeatherId };
        });

    return {
        current: currentTemperature,
        next5Days: next5DaysData,
    };
};

export default tempClassify;
