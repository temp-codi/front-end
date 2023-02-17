import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { geolocationApi } from "@/api/geolocation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { locationAtom, locationWithCity } from "@/recoil/location";

export const useGeo = () => {
  const [location, setLocation] = useRecoilState(locationAtom);
  const setLocationWithCity = useSetRecoilState(locationWithCity);

  // geolocation 불러오는 함수
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude.toString(),
          lon: position.coords.longitude.toString(),
        });
      });
    }
  }, [setLocation]);

  return {
    location,
    ...useQuery({
      queryKey: ["geolocation", location],
      queryFn: async () => {
        if (!location) {
          return { cityInfo: null };
        }

        const data = await geolocationApi(location);
        if (data) {
          const {
            cityInfo: { city },
          } = data;
          setLocationWithCity({ ...location, city });
          return city;
        }
        return { cityInfo: null };
      },
      enabled: !!location,
    }),
  };
};
