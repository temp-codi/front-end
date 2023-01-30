import { useQuery } from "@tanstack/react-query";
import { geolocationApi } from "@/api/geolocation";

export const useGeo = () => {
  return useQuery({
    queryKey: ["normal"],
    queryFn: () => geolocationApi("asdf", "asdf"),
  });
};
