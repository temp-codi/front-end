import axios from "axios";

// alternative to axios is ky-universal package

const instance = axios.create({
  baseURL: "https://tempcodi-backend.onrender.com/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});

export const geolocationApi = async (lat: string, lon: string) => {
  const { data } = await instance.post("geolocation", {
    lon: "139.818482",
    lat: "35.618791",
  });
  console.log(data);
  return data;
};
