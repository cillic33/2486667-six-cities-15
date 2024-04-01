import {useAppSelector} from '@/hooks/store/store';
import {usersSelectors} from '@/store/slices/users';
import {AuthorizationStatus} from '@/utils/const';

export function useAuth(): boolean {
  const authorizationStatus = useAppSelector(usersSelectors.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Authorized;
}
