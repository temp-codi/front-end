import React from 'react';
import { Flex, Dark, Text } from '@/components/atoms';
import Left from '@/components/organisms/Left';
import { useRecoilState } from 'recoil';
import { darkAtom } from '@/recoil/dark';
import { useGeo, useGoogleImg, useTempData } from '@/hooks';
import { Card, CircleBox } from '@/components/molecules';
import { TopTemperature, TempDetail } from '@/components/organisms';

const Pol = () => {
    const { location, data: geoData, isLoading: geoLoading } = useGeo();
    // const { data: googleImgData, isLoading: googleImgLoading } = useGoogleImg();

    const { data: tempData, isLoading: tempDataLoading } = useTempData();
    console.log(tempData);

    // dark mode
    const [isDark, setIsDark] = useRecoilState(darkAtom);

    const toggleDark = () => {
        setIsDark((prev) => !prev);
    };
    return (
        <Dark dark={isDark}>
            <TopTemperature />
            <TempDetail />
        </Dark>
    );
};

export default Pol;
