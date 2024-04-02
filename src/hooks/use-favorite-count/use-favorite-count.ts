import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {favoritesActions, favoritesSelectors} from '@/store/slices/favorites';
import {useEffect} from 'react';
import {RequestStatus} from '@/utils/const';

export function useFavoriteCount() {
  const favoritesRequestStatus = useAppSelector(favoritesSelectors.requestStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    if (favoritesRequestStatus === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [fetchFavorites, favoritesRequestStatus]);

  return count;
}
