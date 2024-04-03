import {User} from '@/types/user';
import {ReactEventHandler} from 'react';
import {RequestStatus} from '@/utils/const';

type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

interface ReviewsState {
  reviews: Review[];
  requestStatus: RequestStatus;
  postStatus: RequestStatus;
}

type PostReviewBody = {
  offerId: string;
  comment: string;
  rating: number;
}

type HandleFieldChange = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export {Review, ReviewsState, PostReviewBody, HandleFieldChange};
