import { atom } from "recoil";

export const test = atom({
  key: "testAtom",
  default: 0 as number,
});
