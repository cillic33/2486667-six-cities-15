import {favoritesSlice} from '@/store/slices/favorites';
import {RequestStatus} from '@/utils/const';
import {changeFavorite, fetchFavorites} from '@/store/thunks/favorites';
import {makeFakePreviewOfferCard} from '@/utils/mock';
import {ChangeFavoriteArgs, ChangeFavoriteResponse, FavoritesState, FavoriteStatus} from '@/types/favorites';
import {describe, it, expect} from 'vitest';

const IS_FAVORITE = true;

describe('favoritesSlice', () => {
  describe('empty actions', () => {
    it('should return initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return default initial state with empty action', () => {
      const emptyAction = { type: '' };
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFavorites', () => {
    it('should set "requestStatus" to "RequestStatus.Loading" with "fetchFavorites.pending" action', () => {
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Loading,
        changeStatus: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(undefined, fetchFavorites.pending('', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "favorites" to array with offer card, "requestStatus" to "RequestStatus.Success" with "fetchFavorites.fulfilled" action', () => {
      const mockOfferCard = makeFakePreviewOfferCard();
      const expectedState: FavoritesState = {
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

    it('should set "requestStatus" to "RequestStatus.Failed" with "fetchFavorites.rejected" action', () => {
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Failed,
        changeStatus: RequestStatus.Idle,
      };

      const result = favoritesSlice.reducer(undefined, fetchFavorites.rejected(null, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('changeFavorite', () => {
    it('should set "changeStatus" to "RequestStatus.Loading" with "changeFavorite.pending" action', () => {
      const mockOfferCard = makeFakePreviewOfferCard(IS_FAVORITE);
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Loading,
      };
      const changeFavoriteArgs: ChangeFavoriteArgs = {
        offerId: mockOfferCard.id,
        status: FavoriteStatus.Add
      };

      const result = favoritesSlice.reducer(undefined, changeFavorite.pending('', changeFavoriteArgs));

      expect(result).toEqual(expectedState);
    });

    it('should set "changeStatus" to "RequestStatus.Success" and add to "favorites" next offer card with "changeFavorite.fulfilled" action', () => {
      const mockOfferCard = makeFakePreviewOfferCard(IS_FAVORITE);
      const initialState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Idle,
      };
      const expectedState: FavoritesState = {
        favorites: [mockOfferCard],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Success,
      };
      const changeFavoriteArgs: ChangeFavoriteArgs = {
        offerId: mockOfferCard.id,
        status: FavoriteStatus.Add
      };
      const changeFavoriteResponse: ChangeFavoriteResponse = {
        offer: mockOfferCard,
        status: FavoriteStatus.Add
      };

      const result = favoritesSlice.reducer(
        initialState,
        changeFavorite.fulfilled(changeFavoriteResponse, '', changeFavoriteArgs)
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "changeStatus" to "RequestStatus.Success" and remove from "favorites" past offer card with "changeFavorite.fulfilled" action', () => {
      const mockOfferCard = makeFakePreviewOfferCard(!IS_FAVORITE);
      const initialState: FavoritesState = {
        favorites: [mockOfferCard],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Idle,
      };
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Success,
      };
      const changeFavoriteArgs: ChangeFavoriteArgs = {
        offerId: mockOfferCard.id,
        status: FavoriteStatus.Remove
      };
      const changeFavoriteResponse: ChangeFavoriteResponse = {
        offer: mockOfferCard,
        status: FavoriteStatus.Remove
      };

      const result = favoritesSlice.reducer(
        initialState,
        changeFavorite.fulfilled(changeFavoriteResponse, '', changeFavoriteArgs)
      );

      expect(result).toEqual(expectedState);
    });

    it('should "changeStatus" to "RequestStatus.Failed" with "changeFavorite.rejected" action', () => {
      const mockOfferCard = makeFakePreviewOfferCard(IS_FAVORITE);
      const expectedState: FavoritesState = {
        favorites: [],
        requestStatus: RequestStatus.Idle,
        changeStatus: RequestStatus.Failed,
      };
      const changeFavoriteArgs: ChangeFavoriteArgs = {
        offerId: mockOfferCard.id,
        status: FavoriteStatus.Add
      };

      const result = favoritesSlice.reducer(undefined, changeFavorite.rejected(null, '', changeFavoriteArgs));

      expect(result).toEqual(expectedState);
    });
  });
});
