import React from 'react';
import { Dark } from '@/components/atoms';
import { useRecoilState } from 'recoil';
import { darkAtom } from '@/recoil/dark';
import { useGeo, useTempData } from '@/hooks';

import { TopTemperature, TempDetail } from '@/components/organisms';

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
