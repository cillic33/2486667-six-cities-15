import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus, CITIES, RequestStatus} from '@/utils/const';
import MainPage from '@/pages/main-page/main-page';
import LoginPage from '@/pages/login-page/login-page';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';
import ProtectedRoute from '@/components/common/protected-route/protected-route';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import LoadingScreen from '@/pages/loading-screen/loading-screen';
import {offersActions, offersSelectors} from '@/store/slices/offers';
import {usersActions, usersSelectors} from '@/store/slices/users';
import {useEffect} from 'react';

export default function App(): JSX.Element {
  const { fetchOffers } = useActionCreators(offersActions);
  const { checkAuth } = useActionCreators(usersActions);

  useEffect(() => {
    fetchOffers();
    checkAuth();
  }, [fetchOffers, checkAuth]);

  const authStatus = useAppSelector(usersSelectors.authorizationStatus);
  const status = useAppSelector(offersSelectors.status);

  if (authStatus === AuthStatus.Unknown || status === RequestStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage cities={CITIES} />}
      >
        {CITIES.map((city) =>
          <Route key={city.id} element={<MainPage cities={CITIES}/>} path={city.id}/>
        )}
      </Route>
      <Route
        path={AppRoute.Login}
        element={<ProtectedRoute onlyUnAuth><LoginPage /></ProtectedRoute>}
      />
      <Route
        path={AppRoute.Favorites}
        element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage type='page' />}
      />
    </Routes>
  );
}
