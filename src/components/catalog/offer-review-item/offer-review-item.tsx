import {getRatingWidth, getConvertDate} from '@/utils';
import {Review} from '@/types/reviews';
import '@/components/catalog/offer-review-item/styles.css';
import {useMemo} from 'react';

type OfferReviewItemProps = {
  review: Review;
}

function OfferReviewItem({ review }: OfferReviewItemProps) {
  const {monthYear, fullDate} = useMemo(
    () => getConvertDate(review.date),
    [review.date]
  );

  return (
    <li className="reviews__item" data-testid="offer-review-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text reviews__text_word-break">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={fullDate}>{monthYear}</time>
      </div>
    </li>
  );
}

export default OfferReviewItem;
