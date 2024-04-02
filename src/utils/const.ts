import {AppRouteOnlyCities, City} from '@/types/city';
import {SortOption} from "@/types/sort";

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

export const appRouteOnlyCities: AppRouteOnlyCities = {
  Paris: {name: 'Paris', id: '/paris'},
  Amsterdam: {name: 'Amsterdam', id: '/amsterdam'},
  Cologne: {name: 'Cologne', id: '/cologne'},
  Brussels: {name: 'Brussels', id: '/brussels'},
  Hamburg: {name: 'Hamburg', id: '/hamburg'},
  Dusseldorf: {name: 'Dusseldorf', id: '/dusseldorf'},
};

export const CITIES: City[] = [
  {
    id: AppRoute.RootParis,
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootAmsterdam,
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootCologne,
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootBrussels,
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootHamburg,
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    id: AppRoute.RootDusseldorf,
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
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
