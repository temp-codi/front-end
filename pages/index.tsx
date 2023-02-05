import { styled } from 'twin.macro';

import { useRouter } from 'next/router';
import Link from 'next/link';
import useLocation from '@/pages/api/location';

import { geolocationApi } from '@/api/geolocation';
import { useGeo } from '@/hooks/useGeolocation';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { LazyLoading } from '@/pages/test';
// recoil
import { useRecoilState } from 'recoil';

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
  console.log(cityInfo);

  const router = useRouter();
  const { pid } = router.query;
  const getApi = () => {
    useLocation;
  };

  const { data, isLoading, isFetching } = useGeo();
  if (!isLoading) {
    return <LazyLoading></LazyLoading>;
  } else {
    return <div>로딩완료</div>;
  }
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  console.log('hoi');
  await queryClient.prefetchQuery({
    queryKey: ['initial'],
    queryFn: () => geolocationApi('', ''),
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
