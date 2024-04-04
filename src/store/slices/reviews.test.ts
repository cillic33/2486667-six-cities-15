import {describe, expect, it} from 'vitest';
import {RequestStatus} from '@/utils/const';
import {ReviewsState} from '@/types/reviews';
import {reviewsSlice} from '@/store/slices/reviews';
import {fetchReviews, postReview} from '@/store/thunks/reviews';
import {makeFakeOfferId, makeFakeReview, makeFakeReviewBody} from '@/utils/mock';

describe('reviewsSlice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Idle,
      };

      const result = reviewsSlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Idle,
      };

      const result = reviewsSlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchReviews', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "fetchReviews.pending" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Loading,
        postStatus: RequestStatus.Idle,
      };

      const result = reviewsSlice.reducer(undefined, fetchReviews.pending('', mockOfferId));

      expect(result).toEqual(expectedState);
    });

    it('should set "reviews" to array of reviews, "requestStatus" to "RequestStatus.Success" with "fetchReviews.fulfilled" action', () => {
      const mockReview = makeFakeReview();
      const mockOfferId = makeFakeOfferId();
      const expectedState: ReviewsState = {
        reviews: [mockReview],
        requestStatus: RequestStatus.Success,
        postStatus: RequestStatus.Idle,
      };

      const result = reviewsSlice.reducer(undefined, fetchReviews.fulfilled([mockReview], '', mockOfferId));

      expect(result).toEqual(expectedState);
    });

    it('should set "requestStatus" to "RequestStatus.Failed" with "fetchReviews.rejected" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Failed,
        postStatus: RequestStatus.Idle,
      };

      const result = reviewsSlice.reducer(undefined, fetchReviews.rejected(null, '', mockOfferId));

      expect(result).toEqual(expectedState);
    });
  });

  describe('postReview', () => {
    it('should set "postStatus" to "RequestStatus.Loading" with "postReview.pending" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Loading,
      };

      const result = reviewsSlice.reducer(undefined, postReview.pending('', mockOfferId));

      expect(result).toEqual(expectedState);
    });

    it('should add to "reviews" array new post, set "postStatus" to "RequestStatus.Success" with "postReview.fulfilled" action', () => {
      const mockReview = makeFakeReview();
      const mockReviewBody = makeFakeReviewBody();
      const initialState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Idle,
      };
      const expectedState: ReviewsState = {
        reviews: [mockReview],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Success,
      };

      const result = reviewsSlice.reducer(
        initialState,
        postReview.fulfilled(mockReview, '', mockReviewBody)
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "postStatus" to "RequestStatus.Failed" with "postReview.rejected" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: ReviewsState = {
        reviews: [],
        requestStatus: RequestStatus.Idle,
        postStatus: RequestStatus.Failed,
      };

      const result = reviewsSlice.reducer(undefined, postReview.rejected(null, '', mockOfferId));

      expect(result).toEqual(expectedState);
    });
  });
});
