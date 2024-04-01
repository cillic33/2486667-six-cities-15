import {Location} from './location';

export type City = {
  id?: string;
  name: string;
  location: Location;
}

export type CityShot = Required<Omit<City, 'location'>>;

export type AppRouteOnlyCities = {
  [key: string]: CityShot;
}
