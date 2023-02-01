import { atom } from "recoil";

export const darkAtom = atom({
  key: "DARK_ATOM",
  default: true as boolean,
});
