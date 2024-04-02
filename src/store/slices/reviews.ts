import {NameSpace, RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {Review} from '@/types/reviews';
import {fetchReviews, postReview} from '@/store/thunks/reviews';

interface ReviewsState {
  reviews: Review[];
  requestStatus: RequestStatus;
  postStatus: RequestStatus;
}

const initialState: ReviewsState = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
  postStatus: RequestStatus.Idle,
};

const reviewsSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.pending, (state: ReviewsState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state: ReviewsState, action) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state: ReviewsState) => {
        state.requestStatus = RequestStatus.Failed;
      })

      .addCase(postReview.pending, (state: ReviewsState) => {
        state.postStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state: ReviewsState, action) => {
        state.postStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state: ReviewsState) => {
        state.postStatus = RequestStatus.Failed;
      }),
  initialState,
  name: NameSpace.Reviews,
  reducers: {},
  selectors: {
    reviews: (state: ReviewsState) => state.reviews,
    requestStatus: (state: ReviewsState) => state.requestStatus,
    postStatus: (state: ReviewsState) => state.postStatus,
  },
});

const reviewsActions = {...reviewsSlice.actions, fetchReviews, postReview};
const reviewsSelectors = reviewsSlice.selectors;

export {reviewsActions, reviewsSelectors, reviewsSlice};
