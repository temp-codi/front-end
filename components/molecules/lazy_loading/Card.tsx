import React from 'react';
import { Flex } from '@/components/atoms';
import { useRecoilState } from 'recoil';

const Card = () => {
    return (
        <Flex direction="col" className="w-screen h-80 bg-slate-900 p-3">
            <Flex className="w-40 h-8 bg-slate-700 rounded-md animate-pulse"></Flex>
            <Flex direction="col" className="animate-pulse">
                <Flex className="w-40 h-40 bg-slate-600 mt-3 rounded-t-md"></Flex>
                <Flex
                    direction="col"
                    className="w-40 h-20 bg-slate-700 p-3 rounded-b-md"
                >
                    <Flex className="w-5/6 h-3 bg-slate-600 rounded-md"></Flex>
                    <Flex className="w-1/3 h-4 bg-slate-600 mt-3 rounded-md"></Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Card;
