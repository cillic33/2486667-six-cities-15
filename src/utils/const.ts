import {City} from '@/types/city';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';

export enum AppRoute {
  Root = '/',
  RootParis = 'paris',
  RootAmsterdam = 'amsterdam',
  RootCologne = 'cologne',
  RootBrussels = 'brussels',
  RootHamburg = 'hamburg',
  RootDusseldorf = 'dusseldorf',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_CITY: City = {
  id: AppRoute.RootParis,
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

export const SORT_OPTION_DEFAULT = SortOption.Popular;

export enum Endpoint {
  Offers = '/offers',
  Offer = '/offers/',
  Nearby = '/nearby',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const enum RequestStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export enum NameSpace {
  Offers ='offers',
  Offer = 'offer',
  Favorites = 'favorites',
  Users = 'users',
  Reviews = 'reviews',
  Nearby = 'nearby',
}
