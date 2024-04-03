import {Host} from './host';
import {OfferPreview} from './offer-preview';
import {RequestStatus} from '@/utils/const';

type Offer = {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
} & OfferPreview;

interface OfferState {
  offer: Offer | null;
  requestStatus: RequestStatus;
}

type ConvertDate = {
  monthYear: string;
  fullDate: string;
}

export {Offer, OfferState, ConvertDate};
