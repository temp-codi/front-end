import { styled } from "twin.macro";
import TestAtom from "@/components/atoms/TestAtom";
import { useRouter } from "next/router";
import Link from "next/link";
import useLocation from "@/pages/api/location";

import { Inter } from "@next/font/google";
import { geolocationApi } from "@/api/geolocation";
import { useGeo } from "@/hooks/useGeolocation";
import { dehydrate, QueryClient } from "@tanstack/react-query";

// recoil
import { useRecoilState } from "recoil";
import { test } from "@/recoil/test";

// fonts
const inter = Inter({ subsets: ["latin"] });

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
  // recoil
  const [counter, setCounter] = useRecoilState(test);

  console.log(cityInfo);

  const router = useRouter();
  const { pid } = router.query;
  const getApi = () => {
    useLocation;
  };

  const { data, isLoading, isFetching } = useGeo();
  if (isLoading) {
    console.log(data);
  }
  return (
    <Wrapper className="border-8 border-red-600">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/sub" id="testAtom">
        Home
      </Link>
      <button onClick={getApi}>get api</button>
      <div>
        <span>{counter}</span>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          눌러 이씨
        </button>
      </div>

      <TestAtom></TestAtom>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  console.log("hoi");
  await queryClient.prefetchQuery({
    queryKey: ["initial"],
    queryFn: () => geolocationApi("", ""),
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
