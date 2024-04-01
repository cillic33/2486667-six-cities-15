import {Navigate, useLocation, Location} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
}

export default function ProtectedRoute({ onlyUnAuth, children }: ProtectedRouteProps): JSX.Element {
  const location = useLocation() as Location<FromState>;
  const isAuth = useAuth();

  // Авторизованы и стр логина => переход на главную или на предыдущую страницу
  // onlyUnAuth - флаг "страница только для неавторизованных"
  if (isAuth && onlyUnAuth) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  // Не авторизованы и не стр логина (стр избранных) => переход на стр логина
  if (!isAuth && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />;
  }

  return children;
}
