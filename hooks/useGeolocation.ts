import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { geolocationApi } from "@/api/geolocation";
import { useRecoilState } from "recoil";
import { locationAtom } from "@/recoil/location";

export const useGeo = () => {
  const [location, setLocation] = useRecoilState(locationAtom);
  console.log(location);

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
      queryKey: ["normal"],
      queryFn: () => geolocationApi(location),
    }),
  };
};
