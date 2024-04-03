import {OfferPreview} from '@/types/offer-preview';
import {RequestStatus} from '@/utils/const';

interface FavoritesState {
  favorites: OfferPreview[];
  requestStatus: RequestStatus;
  changeStatus: RequestStatus;
}

type Favorites = {
  [key: string]: OfferPreview[];
}

enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

type ChangeFavoriteArgs = {
  offerId: string;
  status: FavoriteStatus;
}

type ChangeFavoriteResponse = {
  offer: OfferPreview;
  status: FavoriteStatus;
}

export {FavoritesState, Favorites, FavoriteStatus, ChangeFavoriteArgs, ChangeFavoriteResponse};
