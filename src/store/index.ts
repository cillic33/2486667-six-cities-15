import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '@/services/api';
import {offersSlice} from '@/store/slices/offers';
import {usersSlice} from '@/store/slices/users';
import {offerSlice} from '@/store/slices/offer';
import {nearbySlice} from '@/store/slices/nearby';
import {favoritesSlice} from '@/store/slices/favorites';
import {reviewsSlice} from '@/store/slices/reviews';
import {RootState} from '@/types/store';

const rootReducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [nearbySlice.name]: nearbySlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }),
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare({
        thunk: {
          extraArgument: createAPI(),
        }
      })
  });
}
