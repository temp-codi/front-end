import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { googleImg } from '@/api/googleImg';
import { useRecoilState } from 'recoil';
import { googleImgAtom } from '@/recoil/googleImg';

export const useGoogleImg = ({ keyword, pageNo, gender }) => {
  const [googleInfo, setGoogleInfo] = useRecoilState(googleImgAtom);

  // geolocation 불러오는 함수
  useEffect(() => {
    setGoogleInfo({
      lat: position.coords.latitude.toString(),
      lon: position.coords.longitude.toString(),
    });
  }, [setGoogleInfo]);

  return {
    location,
    ...useQuery({
      queryKey: ['normal'],
      queryFn: () => googleImg(googleInfo),
    }),
  };
};
