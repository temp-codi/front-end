import React from 'react';
import { Text, Flex, Btn } from '@/components/atoms';
import { CodiBtn } from '@/components/molecules';
interface Props {}

const Left = (props: Props) => {
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
};

export default Left;
