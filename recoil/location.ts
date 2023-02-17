import { atom } from "recoil";
import { v1 } from "uuid";
import { Ilocation } from "@/_types";

export const locationAtom = atom({
  key: `location_atom/${v1()}`,
  default: { lat: "", lon: "" } as Ilocation,
});

interface ITempApi extends Ilocation {
  city: string;
}

export const locationWithCity = atom({
  key: `location_atom/${v1()}`,
  default: { lat: "", lon: "", city: "" } as ITempApi,
});
