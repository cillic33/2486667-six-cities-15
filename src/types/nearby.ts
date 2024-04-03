import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';

export interface NearbyState {
  nearOffers: Offer[];
  requestStatus: RequestStatus;
}
