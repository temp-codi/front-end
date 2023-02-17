import { atom } from "recoil";
import { v1 } from "uuid";

export const tempAtom = atom({
  key: `location_atom/${v1()}`,
  default: null,
});
