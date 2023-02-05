import React from "react";
import { Flex, Dark, Text } from "@/components/atoms";
import { useRecoilState } from "recoil";
import { darkAtom } from "@/recoil/dark";

const Pol = () => {
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
        lightClasses={["bg-slate-200"]}
        darkClasses={["dark:bg-slate-900"]}
        zIndex="z-10"
        transitionClasses={["transition-colors", "duration-700"]}
        style={{ border: "2px solid blue" }}
        className="w-full"
      ></Flex>

      <div className="w-52 h-52 bg-slate-700"></div>
      <Text as="h1" className="">
        Hello World
      </Text>
      <Text as="h2">Hello World</Text>
      <Text as="p">Hello World</Text>
    </Dark>
  );
};

export default Pol;