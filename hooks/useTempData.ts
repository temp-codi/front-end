import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tempAtom } from "@/recoil/temp";
import { locationWithCity } from "@/recoil/location";
import { useQuery } from "@tanstack/react-query";
import { tempApi } from "@/api/temp";

export const useTempData = () => {
  const locationWithCityValue = useRecoilValue(locationWithCity);

  const setTempData = useSetRecoilState(tempAtom);

  return {
    ...useQuery({
      queryKey: ["tempData", locationWithCityValue],
      queryFn: async () => {
        const { lat, lon, city } = locationWithCityValue;
        if (lat && lon && city) {
          const data = await tempApi(locationWithCityValue);
          console.log(data);
          if (data) {
            setTempData(data);
          }
          return data;
        } else {
          return { tempData: null };
        }
      },
    }),
  };
};
