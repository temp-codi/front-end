import { atom } from "recoil";
import { v1 } from "uuid";
import { Ilocation } from "@/_types";

export const locationAtom = atom({
  key: `location_atom/${v1()}`,
  default: { lat: "", lon: "" } as Ilocation,
});
