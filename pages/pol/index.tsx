import React from "react";
import { Flex, Dark } from "@/components/atoms";
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
        style={{ border: "2px solid blue" }}
        className="w-full"
      >
        <Flex>1</Flex>
        <Flex>2</Flex>
        <Flex>3</Flex>
      </Flex>
    </Dark>
  );
};

export default Pol;
