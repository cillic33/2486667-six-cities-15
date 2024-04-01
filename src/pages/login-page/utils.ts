import {AppRouteOnlyCities, CityShot} from '@/types/city';

export function randomProperty(obj: AppRouteOnlyCities): CityShot {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}
