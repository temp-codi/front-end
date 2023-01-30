// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// let a = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8c3908481daf978e0c7e1a18b47b266a'
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { QueryOptions } from "react-query";
import { useQuery } from "react-query";

type Data = {
  name: string;
};
type ILocation = {
  lon: string;
  lat: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const useLocation = async (data: ILocation, options: QueryOptions) => {
  const queryKey = `https://tempcodi-backend.onrender.com/api/geolocation`;
  const queryFn = await axios.post(`${queryKey}`, data).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};
