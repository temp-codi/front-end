import React from "react";
import { Flex } from "@/components/atoms";
import { CircleBox } from "@/components/molecules";

const TopTemperature = () => {
  return (
    <Flex align="center" justify="between" direction="row" className="border">
      <CircleBox />
      <CircleBox />
      <CircleBox />
      <CircleBox />
      <CircleBox />
    </Flex>
  );
};

export default TopTemperature;
