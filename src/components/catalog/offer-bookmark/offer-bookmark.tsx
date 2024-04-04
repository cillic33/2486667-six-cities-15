import {clsx} from 'clsx';
import {MouseEvent, useEffect, useState} from 'react';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {ChangeFavoriteArgs, FavoriteStatus} from '@/types/favorites';
import {favoritesActions, favoritesSelectors} from '@/store/slices/favorites';
import {offersActions} from '@/store/slices/offers';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';
import {useNavigate} from 'react-router-dom';
import {AppRoute, RequestStatus} from '@/utils/const';
import '@/components/catalog/offer-bookmark/styles.css';

type OfferBookmarkProps = {
  isFavorite: boolean;
  offerId: string;
  block: string;
}

function OfferBookmark({ isFavorite, offerId, block }: OfferBookmarkProps): JSX.Element {
  const [currentIsFavorite, setCurrentIsFavorite] = useState<boolean>(isFavorite);
  const { changeFavorite } = useActionCreators(favoritesActions);
  const { updateFavoriteStatus } = useActionCreators(offersActions);
  const changeFavoriteStatus = useAppSelector(favoritesSelectors.changeStatus);
  const isAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setCurrentIsFavorite(isFavorite);
    }

    return () => {
      isMounted = false;
    };
  }, [isFavorite]);

  const handleBookmarkClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (isAuth) {
      setCurrentIsFavorite(!currentIsFavorite);

      const changeFavoriteArgs: ChangeFavoriteArgs = {
        offerId,
        status: currentIsFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add,
      };

      changeFavorite(changeFavoriteArgs).then(() => {
        updateFavoriteStatus(changeFavoriteArgs);
      });
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={clsx(
        `${block}__bookmark-button`,
        'button',
        isAuth && currentIsFavorite && `${block}__bookmark-button--active`
      )}
      type="button"
      onClick={handleBookmarkClick}
      disabled={changeFavoriteStatus === RequestStatus.Loading}
    >
      <svg
        className={`${block}__bookmark-icon`}
        width={block === 'offer' ? '31' : '18'}
        height={block === 'offer' ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isAuth && currentIsFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default OfferBookmark;
