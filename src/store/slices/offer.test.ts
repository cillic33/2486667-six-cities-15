import {describe, expect, it} from 'vitest';
import {RequestStatus} from '@/utils/const';
import {OfferState} from '@/types/offer';
import {offerSlice} from '@/store/slices/offer';
import {fetchOffer} from '@/store/thunks/offer';
import {makeFakeOfferCard, makeFakeOfferId} from '@/utils/mock';

describe('offer slice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: OfferState = {
        offer: null,
        requestStatus: RequestStatus.Idle,
      };

      const result = offerSlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: OfferState = {
        offer: null,
        requestStatus: RequestStatus.Idle,
      };

      const result = offerSlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchOffer', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "fetchOffer.pending" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: OfferState = {
        offer: null,
        requestStatus: RequestStatus.Loading,
      };

      const result = offerSlice.reducer(undefined, fetchOffer.pending('', mockOfferId));

      expect(result).toEqual(expectedState);
    });

    it('should set offer to offer card, "requestStatus" to "RequestStatus.Success" with "fetchOffer.fulfilled" action', () => {
      const mockOfferCard = makeFakeOfferCard();
      const expectedState: OfferState = {
        offer: mockOfferCard,
        requestStatus: RequestStatus.Success,
      };

      const result = offerSlice.reducer(undefined, fetchOffer.fulfilled(mockOfferCard, '', mockOfferCard.id));

      expect(result).toEqual(expectedState);
    });

    it('should set "requestStatus" to "RequestStatus.Failed" with "fetchOffer.rejected" action', () => {
      const mockOfferId = makeFakeOfferId();
      const expectedState: OfferState = {
        offer: null,
        requestStatus: RequestStatus.Failed,
      };

      const result = offerSlice.reducer(undefined, fetchOffer.rejected(null, '', mockOfferId));

      expect(result).toEqual(expectedState);
    });
  });
});
