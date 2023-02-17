import { instance } from "./instance";
import { Ilocation } from "@/_types";

interface ITempApi extends Ilocation {
  city: string;
}

export const tempApi = async ({ lon, lat, city }: ITempApi) => {
  if (lon && lat && city) {
    const { data } = await instance.post("temp", {
      lon,
      lat,
      city,
    });
    return data;
  } else {
    return null;
  }
};
