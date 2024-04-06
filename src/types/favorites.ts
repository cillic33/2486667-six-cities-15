import {OfferPreview} from '@/types/offer-preview';
import {RequestStatus} from '@/utils/const';

export interface FavoritesState {
  favorites: OfferPreview[];
  requestStatus: RequestStatus;
  changeStatus: RequestStatus;
}

export type Favorites = {
  [key: string]: OfferPreview[];
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export type ChangeFavoriteArgs = {
  offerId: string;
  status: FavoriteStatus;
}

export type ChangeFavoriteResponse = {
  offer: OfferPreview;
  status: FavoriteStatus;
}
