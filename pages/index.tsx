import { styled } from "twin.macro";

import { useRouter } from "next/router";
import Link from "next/link";
import useLocation from "@/pages/api/location";

import { geolocationApi } from "@/api/geolocation";
import { useGeo } from "@/hooks/useGeolocation";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Card } from "@/components/molecules/lazy_loading";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import UseCurrentLocation from "@/pages/test/UseCurrentLocation";

// {
//   dehydratedState: {
//     queries: [
//       {
//         state: {
//           data: { cityInfo },
//         },
//       },
//     ],
//   },
// }: any

const Home = () => {
  return <UseCurrentLocation />;
};

// 페이지 안에 들어와서 로딩 상태 보여주는게 더 UI 적으로 효과적이기 때문에
// getStaticProps는 사용하지 않는걸로...
// 막약 벡엔드 서버 프리미엄으로 바꾸면 사용하면 되지용
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["initial"],
    queryFn: () => geolocationApi({ lat: "45", lon: "45" }),
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
