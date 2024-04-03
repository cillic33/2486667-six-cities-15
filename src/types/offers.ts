import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {SortOption} from '@/types/sort';
import {RequestStatus} from '@/utils/const';

interface OffersState {
  offers: Offer[];
  city: City;
  sortOption: SortOption;
  requestStatus: RequestStatus;
}

export {OffersState};
