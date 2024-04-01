import {Offer} from '@/types/offer';
import {NameSpace, RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffer} from '@/store/thunks/offer';

interface OfferState {
  offer: Offer | null;
  requestStatus: RequestStatus;
}

const initialState: OfferState = {
  offer: null,
  requestStatus: RequestStatus.Idle,
};

const offerSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffer.pending, (state: OfferState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state: OfferState, action) => {
        state.requestStatus = RequestStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state: OfferState) => {
        state.requestStatus = RequestStatus.Failed;
      }),
  initialState,
  name: NameSpace.Offer,
  reducers: {
    clear(state: OfferState) {
      state.offer = null;
    }
  },
  selectors: {
    offer: (state: OfferState) => state.offer,
    requestStatus: (state: OfferState) => state.requestStatus,
  },
});

const offerActions = {fetchOffer};
const offerSelectors = offerSlice.selectors;

export {offerActions, offerSelectors, offerSlice};
