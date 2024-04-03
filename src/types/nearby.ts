import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';

interface NearbyState {
  nearOffers: Offer[];
  requestStatus: RequestStatus;
}

export {NearbyState};
