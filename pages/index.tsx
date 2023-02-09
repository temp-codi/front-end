import { styled } from "twin.macro";

import { useRouter } from "next/router";
import Link from "next/link";
import useLocation from "@/pages/api/location";

import { geolocationApi } from "@/api/geolocation";
import { useGeo } from "@/hooks/useGeolocation";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { LazyLoading } from "@/pages/test";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { currentLocation } from "@/recoil/currentLocation";
import UseCurrentLocation from "@/pages/test/UseCurrentLocation";

const Home = ({
  dehydratedState: {
    queries: [
      {
        state: {
          data: { cityInfo },
        },
      },
    ],
  },
}: any) => {
  return <UseCurrentLocation />;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["initial"],
    queryFn: () => geolocationApi({ lat: "", lon: "" }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;
export default Home;
