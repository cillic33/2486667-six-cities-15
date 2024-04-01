import {AppRouteOnlyCitiesType, CityShot} from '@/types/city';

export function randomProperty(obj: AppRouteOnlyCitiesType): CityShot {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}
