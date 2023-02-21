import React from 'react';
import { Flex, Dark, Text } from '@/components/atoms';
import Left from '@/components/organisms/Left';
import { useRecoilState } from 'recoil';
import { darkAtom } from '@/recoil/dark';
import { useGeo, useGoogleImg, useTempData } from '@/hooks';
import { Card, CircleBox } from '@/components/molecules';
import { TopTemperature, TempDetail } from '@/components/organisms';
import { tempClassify } from '@/lib';

const Pol = () => {
    const { location, data: geoData, isLoading: geoLoading } = useGeo();
    // const { data: googleImgData, isLoading: googleImgLoading } = useGoogleImg();

    const { data: tempData, isLoading: tempDataLoading } = useTempData();

    // dark mode
    const [isDark, setIsDark] = useRecoilState(darkAtom);

    const toggleDark = () => {
        setIsDark((prev) => !prev);
    };
    return (
        <Dark dark={isDark}>
            {!tempDataLoading && <TopTemperature />}
            <TempDetail />
        </Dark>
    );
};

export default Pol;
