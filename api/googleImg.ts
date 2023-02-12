import { instance } from "./instance";
import { IGoogleImg, IGoogleImgArr } from "@/_types";

export const googleImgApi = async ({
  keyword,
  pageNo,
  gender,
}: IGoogleImg): Promise<IGoogleImgArr> => {
  const { data } = await instance.post("googleImg", {
    keyword,
    pageNo,
    gender,
  });
  console.log(data);

  return data;
};
