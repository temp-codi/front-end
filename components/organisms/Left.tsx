import React from 'react';
import { Text, Flex, Img } from '@/components/atoms';
import { CodiBtn } from '@/components/molecules';
import { useGoogleImg } from '@/hooks';
import { Card } from '@/components/molecules/lazy_loading';
interface Props {
    type: string;
}

const Left = ({ type }: Props) => {
    const { data: googleImgData, isLoading: googleImgLoading } = useGoogleImg();
    console.log(googleImgData?.googleInfo);
    if (type == 'main') {
        return (
            <Flex className="h-screen w-96 p-4 bg-slate-800" direction="col">
                <Flex
                    className="bg-slate-600"
                    direction="row"
                    justify="between"
                    align="center"
                >
                    <Flex>
                        <Text as="h3">LOGO</Text>
                    </Flex>
                    <Flex>
                        <Text as="h1">8°C</Text>
                        <Text as="h1">/</Text>
                        <Text as="h1">12°C</Text>
                    </Flex>
                </Flex>
                <Flex direction="col" className="mt-20">
                    <CodiBtn
                        firstCategory="코디 추천받기"
                        // secondCategory="Sunhat, Ponytail"
                    ></CodiBtn>
                </Flex>
                <Flex direction="col" className="mt-20 space-y-5">
                    <CodiBtn
                        firstCategory="Head"
                        secondCategory="Tank Tops,
    Short Sleeve Blouses"
                        // secondCategory="Sunhat, Ponytail"
                    ></CodiBtn>
                    <CodiBtn
                        firstCategory="Head"
                        secondCategory="Sunhat, Ponytail"
                    ></CodiBtn>
                </Flex>
            </Flex>
        );
    } else {
        if (!googleImgLoading) {
            return googleImgData?.googleInfo?.map((data: any) => {
                return (
                    <Flex
                        className="h-screen w-96 p-4 bg-slate-800"
                        direction="col"
                    >
                        <Flex>
                            <Text as="h3">LOGO</Text>
                        </Flex>
                        <Flex className="bg-slate-600 mt-20 flex-1">
                            <Img src={data.img} alt="Example image" />
                        </Flex>
                        <Flex
                            direction="row"
                            className="bg-slate-600 mt-20"
                            justify="between"
                        >
                            <Flex>
                                <Text as="h2">28일 Today</Text>
                            </Flex>
                            <Flex>
                                <Text as="h2">🌞</Text>
                            </Flex>
                        </Flex>
                        <Flex className="bg-slate-600 mt-20">
                            <Text as="h1">8°C</Text>
                            <Text as="h1">/</Text>
                            <Text as="h1">12°C</Text>
                        </Flex>
                    </Flex>
                );
            });
        } else {
            return <Card />;
        }
    }
};

export default Left;
