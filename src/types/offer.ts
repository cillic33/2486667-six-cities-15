import {Host} from './host';
import {OfferPreview} from './offer-preview';
import {RequestStatus} from '@/utils/const';

export type Offer = {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
} & OfferPreview;

export interface OfferState {
  offer: Offer | null;
  requestStatus: RequestStatus;
}

export type ConvertDate = {
  monthYear: string;
  fullDate: string;
}
