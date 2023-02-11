import React from 'react';
import { Text, Flex, Btn } from '@/components/atoms';

interface Props {
  firstCategory: string; //ex: Head
  secondCategory?: string; //ex: Sunhat,Ponytail
}

const CodiBtn = ({ firstCategory, secondCategory }: Props) => {
  if (secondCategory) {
    return (
      <Btn
        direction="row"
        align="center"
        justify="between"
        className="bg-slate-400  rounded-2xl p-3"
      >
        <Text className="pl-5 font-bold text-sm" as="p">
          {firstCategory}
        </Text>
        <Text className=" text-center pr-5 font-bold text-sm" as="p">
          {secondCategory}
        </Text>
      </Btn>
    );
  } else {
    return (
      <Btn
        direction="row"
        align="center"
        justify="center"
        className="bg-slate-400  rounded-2xl p-8"
      >
        <Text className="font-bold text-xl" as="p">
          {firstCategory}
        </Text>
      </Btn>
    );
  }
};

export default CodiBtn;
