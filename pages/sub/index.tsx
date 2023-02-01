// recoil
import { useRecoilValue } from "recoil";
import { test } from "@/recoil/test";

const Sub = () => {
  const counter = useRecoilValue(test);
  return <div>{counter}</div>;
};

export default Sub;
