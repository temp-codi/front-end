import React from 'react';
import { Flex, Dark, Text } from '@/components/atoms';
import Left from '@/components/organisms/Left';
import { useRecoilState } from 'recoil';
import { darkAtom } from '@/recoil/dark';
import { useGeo, useGoogleImg, useChatGpt } from '@/hooks';
import { Card } from '@/components/molecules/lazy_loading';

const Pol = () => {
    const props = {
        weather: 'warm',
        gender: 'men',
    };
    const { location, data: geoData, isLoading: geoLoading } = useGeo();
    const { data: googleImgData, isLoading: googleImgLoading } = useGoogleImg();
    const { data: usechatGptData, isLoading: usechatGptLoading } = useChatGpt({
        weather: 'warm',
        gender: 'men',
    });
    console.log(usechatGptData);

    // dark mode
    const [isDark, setIsDark] = useRecoilState(darkAtom);

    const toggleDark = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <Dark dark={isDark}>
            <button onClick={toggleDark}>버툰</button>
            <Flex
                align="center"
                justify="between"
                direction="row"
                positionClasses="absolute"
                lightClasses={['bg-slate-200']}
                darkClasses={['dark:bg-slate-900']}
                zIndex="z-10"
                transitionClasses={['transition-colors', 'duration-700']}
                style={{ border: '2px solid blue' }}
                className="w-full"
            >
                <Text as="h1" className="">
                    Hello World
                </Text>
                <Text as="h2">Hello World</Text>
                <Text as="p">Hello World</Text>
            </Flex>

            <div className="w-52 h-52 bg-slate-700"></div>
            <Text as="h1" className="">
                Hello World
            </Text>
            <Text as="h2">Hello World</Text>
            <Text as="p">Hello World</Text>
            {/* <Card /> */}
            {/* <Left type="sec" /> */}
            {/* <Left type="main" /> */}
        </Dark>
    );
};

export default Pol;
