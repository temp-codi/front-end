import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tempAtom, tempClassified } from '@/recoil/temp';
import { locationWithCity } from '@/recoil/location';
import { useQuery } from '@tanstack/react-query';
import { tempApi } from '@/api/temp';
import { tempClassify } from '@/lib';

export const useTempData = () => {
    const locationWithCityValue = useRecoilValue(locationWithCity);

    const setTempData = useSetRecoilState(tempAtom);
    const setTempClassified = useSetRecoilState(tempClassified);

    return {
        ...useQuery({
            queryKey: ['tempData', locationWithCityValue],
            queryFn: async () => {
                const data = await tempApi(locationWithCityValue);
                if (data) {
                    const {
                        data: { list },
                    } = data;
                    const res = tempClassify(list);
                    console.log(res);
                    setTempClassified(res);
                }
                setTempData(data);

                return data;
            },
        }),
    };
};
