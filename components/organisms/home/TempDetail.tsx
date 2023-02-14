import React from "react";
import { Flex } from "@/components/atoms";
import { DetailBox } from "@/components/molecules";

const TempDetail = () => {
  return (
    <Flex align="center" justify="center" direction="row" className="w-full">
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
      <DetailBox />
    </Flex>
  );
};

export default TempDetail;
