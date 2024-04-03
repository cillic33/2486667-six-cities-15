import {NameSpace, RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {changeFavorite, fetchFavorites} from '@/store/thunks/favorites';
import {FavoritesState, FavoriteStatus} from '@/types/favorites';

const initialState: FavoritesState = {
  favorites: [],
  requestStatus: RequestStatus.Idle,
  changeStatus: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state: FavoritesState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state: FavoritesState, action) => {
        state.favorites = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState) => {
        state.requestStatus = RequestStatus.Failed;
      })

      .addCase(changeFavorite.pending, (state: FavoritesState) => {
        state.changeStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state: FavoritesState, action) => {
        state.changeStatus = RequestStatus.Success;

        switch (action.payload.status) {
          case FavoriteStatus.Add:
            state.favorites.push(action.payload.offer);
            break;
          case FavoriteStatus.Remove:
            state.favorites = state.favorites.filter(({id}) => id !== action.payload.offer.id);
            break;
        }
      })
      .addCase(changeFavorite.rejected, (state: FavoritesState) => {
        state.changeStatus = RequestStatus.Failed;
      }),
  initialState,
  name: NameSpace.Favorites,
  reducers: {},
  selectors: {
    favorites: (state: FavoritesState) => state.favorites,
    requestStatus: (state: FavoritesState) => state.requestStatus,
    changeStatus: (state: FavoritesState) => state.changeStatus,
  },
});

const favoritesActions = {...favoritesSlice.actions, changeFavorite, fetchFavorites};
const favoritesSelectors = favoritesSlice.selectors;

export {favoritesActions, favoritesSelectors, favoritesSlice};
