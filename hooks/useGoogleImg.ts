import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { googleImgApi } from '@/api/googleImg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { googleImgAtom, googleImgPropsAtoms } from '@/recoil/googleImg';

export const useGoogleImg = () => {
  const { query } = useRouter();

  const [searchProps, setSearchProps] = useRecoilState(googleImgPropsAtoms);
  const googleImgArr = useRecoilValue(googleImgAtom);

  useEffect(() => {
    // const { keyword, pageNo, gender } = query;
    const keyword = 'warm';
    const pageNo = 2;
    const gender = 'male';

    if (keyword && pageNo && gender) {
      const stringified = {
        keyword: keyword.toString(),
        pageNo: Number(pageNo),
        gender: gender.toString(),
      };
      setSearchProps(stringified);
    }
  }, [query, setSearchProps]);

  return {
    googleImgArr,
    ...useQuery({
      queryKey: ['googleImg', searchProps],
      queryFn: () => googleImgApi(searchProps),
      enabled: !!searchProps,
    }),
  };
};
