import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { googleImgApi } from "@/api/googleImg";
import { useRecoilState } from "recoil";
import { googleImgAtom, googleImgPropsAtoms } from "@/recoil/googleImg";

export const useGoogleImg = () => {
  const { query } = useRouter();

  const [searchProps, setSearchProps] = useRecoilState(googleImgPropsAtoms);
  const [googleImgArr, setGoogleImgArr] = useRecoilState(googleImgAtom);
  console.log(googleImgArr);

  useEffect(() => {
    const { keyword, pageNo, gender } = query;
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
      queryKey: ["googleImg", searchProps],
      queryFn: () => googleImgApi(searchProps),
      enabled: !!searchProps,
    }),
  };
};
