import {User} from '@/types/user';
import {ReactEventHandler} from 'react';
import {RequestStatus} from '@/utils/const';

export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export interface ReviewsState {
  reviews: Review[];
  requestStatus: RequestStatus;
  postStatus: RequestStatus;
}

export type PostReviewBody = {
  offerId: string;
  comment: string;
  rating: number;
}

export type HandleFieldChange = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
