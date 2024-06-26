import {Link} from 'react-router-dom';
import {Offer} from '@/types/offer';
import {AppRoute} from '@/utils/const';
import {clsx} from 'clsx';
import {getRatingWidth} from '@/utils';
import {OfferPreview} from '@/types/offer-preview';
import OfferBookmark from '@/components/catalog/offer-bookmark';
import {memo, useMemo} from 'react';

type CardProps = {
  offer: Offer | OfferPreview;
  block: string;
  onCardHover?: (id: Offer['id'] | null) => void;
}

function OfferCard({ offer, block, onCardHover }: CardProps): JSX.Element {
  const offerRatingWidth = useMemo(
    () => getRatingWidth(offer.rating),
    [offer.rating]
  );

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={() => {
        if (onCardHover) {
          onCardHover(offer.id);
        }
      }}
      onMouseLeave={() => {
        if (onCardHover) {
          onCardHover(null);
        }
      }}
      data-testid="offer-card"
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={block === 'favorites' ? '150' : '260'}
            height={block === 'favorites' ? '110' : '200'}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={clsx('place-card__info', block === 'favorites' && 'favorites__card-info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferBookmark isFavorite={offer.isFavorite} offerId={offer.id} block='place-card' />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRatingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

const MemoOfferCard = memo(OfferCard);
export default MemoOfferCard;
