import {Location} from './location';

export type City = {
  id?: string;
  name: string;
  location: Location;
}

export type CityShot = Omit<City, 'location'>;

export type AppRouteOnlyCitiesType = {
  [key: string]: CityShot;
}
