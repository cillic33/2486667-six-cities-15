import {RequestStatus} from '@/utils/const';
import {NearbyState} from '@/types/nearby';
import {nearbySlice} from '@/store/slices/nearby';
import {describe, it, expect} from 'vitest';
import {fetchNearOffers} from '@/store/thunks/nearby';
import {makeFakeOfferCard, makeFakeOfferId} from '@/utils/mock';

describe('nearby slice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: NearbyState = {
        nearOffers: [],
        requestStatus: RequestStatus.Idle,
      };

      const result = nearbySlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it ('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: NearbyState = {
        nearOffers: [],
        requestStatus: RequestStatus.Idle,
      };

      const result = nearbySlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });

    describe('fetchNearOffers', () => {
      it('should set "requestStatus" to "RequestStatus.Loading" with "fetchNearOffers.pending"', () => {
        const mockOfferId = makeFakeOfferId();
        const expectedState: NearbyState = {
          nearOffers: [],
          requestStatus: RequestStatus.Loading,
        };

        const result = nearbySlice.reducer(undefined, fetchNearOffers.pending('', mockOfferId));

        expect(result).toEqual(expectedState);
      });

      it('should set nearOffers to array with order card, "requestStatus" to "RequestStatus.Success" with "fetchNearOffers.fulfilled"', () => {
        const mockOfferCard = makeFakeOfferCard();
        const expectedState: NearbyState = {
          nearOffers: [mockOfferCard],
          requestStatus: RequestStatus.Success,
        };

        const result = nearbySlice.reducer(
          undefined,
          fetchNearOffers.fulfilled([mockOfferCard], '', mockOfferCard.id),
        );

        expect(result).toEqual(expectedState);
      });

      it('should set "requestStatus" to "RequestStatus.Failed" with "fetchNearOffers.rejected"', () => {
        const mockOfferId = makeFakeOfferId();
        const expectedState: NearbyState = {
          nearOffers: [],
          requestStatus: RequestStatus.Failed,
        };

        const result = nearbySlice.reducer(undefined, fetchNearOffers.rejected(null, '', mockOfferId));

        expect(result).toEqual(expectedState);
      });
    });
  });
});
