import {favoritesSlice} from '@/store/slices/favorites';
import {RequestStatus} from '@/utils/const';
import {fetchFavorites} from '@/store/thunks/favorites';
import {makeFakeOfferCard} from '@/utils/mock';
import * as faker from "faker";

describe('Favorites slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      requestStatus: RequestStatus.Idle,
      changeStatus: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favorites: [],
      requestStatus: RequestStatus.Idle,
      changeStatus: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "requestStatus" to "RequestStatus.Loading" with "fetchFavorites.pending"', () => {
    const expectedState = {
      favorites: [],
      requestStatus: RequestStatus.Loading,
      changeStatus: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(undefined, fetchFavorites.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favorites" to array with offer card, "requestStatus" to "RequestStatus.Success" with "fetchFavorites.fulfilled"', () => {
    const mockOfferCard = makeFakeOfferCard();
    console.log(mockOfferCard);
    const expectedState = {
      favorites: [mockOfferCard],
      requestStatus: RequestStatus.Success,
      changeStatus: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(
      undefined,
      fetchFavorites.fulfilled([mockOfferCard], '', undefined),
    );

    expect(result).toEqual(expectedState);
  });
});
