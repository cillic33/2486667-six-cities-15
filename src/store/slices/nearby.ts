import {Offer} from '@/types/offer';
import {NameSpace, RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchNearOffers} from '@/store/thunks/nearby';

interface NearbyState {
  nearOffers: Offer[];
  requestStatus: RequestStatus;
}

const initialState: NearbyState = {
  nearOffers: [],
  requestStatus: RequestStatus.Idle,
};

const nearbySlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchNearOffers.pending, (state: NearbyState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearOffers.fulfilled, (state: NearbyState, action) => {
        state.requestStatus = RequestStatus.Success;
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffers.rejected, (state: NearbyState) => {
        state.requestStatus = RequestStatus.Failed;
      }),
  initialState,
  name: NameSpace.Nearby,
  reducers: {},
  selectors: {
    nearOffers: (state: NearbyState) => state.nearOffers,
    requestStatus: (state: NearbyState) => state.requestStatus,
  },
});

const nearbyActions = {fetchNearOffers};
const nearbySelectors = nearbySlice.selectors;

export {nearbyActions, nearbySelectors, nearbySlice};
