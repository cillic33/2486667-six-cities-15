import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {offersActions} from '@/store/slices/offers';
import {favoritesSelectors} from '@/store/slices/favorites';
import {RequestStatus} from '@/utils/const';
import {useEffect} from 'react';

export function useUpdateAllFavoriteStatuses() {
  const {updateAllFavoriteStatuses} = useActionCreators(offersActions);
  const favorites = useAppSelector(favoritesSelectors.favorites);
  const favoritesRequestStatus = useAppSelector(favoritesSelectors.requestStatus);

  useEffect(() => {
    if (favoritesRequestStatus === RequestStatus.Success) {
      updateAllFavoriteStatuses(favorites);
    }
  }, [favorites, updateAllFavoriteStatuses, favoritesRequestStatus]);
}
