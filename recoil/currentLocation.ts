import { atom } from 'recoil';
import { v1 } from 'uuid';
interface currentLocationObj {
  latitude: number;
  longitude: number;
}
export const currentLocation = atom({
  key: `currentLocation/${v1()}`,
  default: { latitude: 0, longitude: 0 } as currentLocationObj,
});
