import {describe, expect, it} from 'vitest';
import {OffersState} from '@/types/offers';
import {DEFAULT_CITY, RequestStatus, SORT_OPTION_DEFAULT} from '@/utils/const';
import {offersSlice} from '@/store/slices/offers';
import {fetchOffers} from '@/store/thunks/offers';
import {
  makeFakeCity,
  makeFakeOfferCard,
  makeFakeSortOption
} from '@/utils/mock';

describe('offersSlice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: OffersState = {
        offers: [],
        city: DEFAULT_CITY,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Idle,
      };

      const result = offersSlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it ('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: OffersState = {
        offers: [],
        city: DEFAULT_CITY,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Idle,
      };

      const result = offersSlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchOffers', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "fetchOffers.pending" action', () => {
      const expectState: OffersState = {
        offers: [],
        city: DEFAULT_CITY,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Loading,
      };

      const result = offersSlice.reducer(undefined, fetchOffers.pending('', undefined));

      expect(result).toEqual(expectState);
    });

    it('should set offers to array with offer cards, "requestStatus" to "RequestStatus.Success" with "fetchOffers.fulfilled" action', () => {
      const mockOfferCard = makeFakeOfferCard();
      const expectState: OffersState = {
        offers: [mockOfferCard],
        city: DEFAULT_CITY,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Success,
      };

      const result = offersSlice.reducer(undefined, fetchOffers.fulfilled([mockOfferCard], '', undefined));

      expect(result).toEqual(expectState);
    });

    it('should set "requestStatus" to "RequestStatus.Failed" with "fetchOffers.rejected" action', () => {
      const expectState: OffersState = {
        offers: [],
        city: DEFAULT_CITY,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Failed,
      };

      const result = offersSlice.reducer(undefined, fetchOffers.rejected(null, '', undefined));

      expect(result).toEqual(expectState);
    });
  });

  describe('setCity', () => {
    it('should set "city" width "setCity" action', () => {
      const mockCity = makeFakeCity();
      const expectState: OffersState = {
        offers: [],
        city: mockCity,
        sortOption: SORT_OPTION_DEFAULT,
        requestStatus: RequestStatus.Idle,
      };

      const result = offersSlice.reducer(undefined, offersSlice.actions.setCity(mockCity));

      expect(result).toEqual(expectState);
    });
  });

  describe('setSortOption', () => {
    it('should set "sortOption" to new sort option with "setSortOption" action', () => {
      const mockSortOption = makeFakeSortOption();
      const expectState: OffersState = {
        offers: [],
        city: DEFAULT_CITY,
        sortOption: mockSortOption,
        requestStatus: RequestStatus.Idle,
      };

      const result = offersSlice.reducer(undefined, offersSlice.actions.setSortOption(mockSortOption));

      expect(result).toEqual(expectState);
    });
  });

});
