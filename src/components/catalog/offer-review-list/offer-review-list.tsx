import {Review} from '@/types/reviews';
import OfferReviewItem from '@/components/catalog/offer-review-item/offer-review-item';
import OfferReviewEmpty from '@/components/catalog/offer-review-empty/offer-review-empty';
import {COUNT_VISIBLE_REVIEWS, HIDDEN_CLASS} from '@/components/catalog/offer-review-list/const';
import {MouseEvent, useState} from 'react';
import '@/components/catalog/offer-review-list/styles.css';
import {clsx} from 'clsx';

type OfferReviewListProps = {
  reviews: Review[];
}

export default function OfferReviewList({ reviews }: OfferReviewListProps): JSX.Element {
  const sortedReviews = reviews.toSorted((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const [currentVisibleReviews, setCurrentVisibleReviews] = useState<number>(0);
  const sortedVisibleReviews = sortedReviews.slice(0, COUNT_VISIBLE_REVIEWS + currentVisibleReviews);

  const showClickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setCurrentVisibleReviews(currentVisibleReviews + COUNT_VISIBLE_REVIEWS);
  };

  return (
    <>
      {sortedVisibleReviews.length !== 0 && (
        <ul className="reviews__list">
          {sortedVisibleReviews.map((review) => (
            <OfferReviewItem review={review} key={review.id} />
          ))}
        </ul>
      )}

      <a href="#"
        onClick={showClickHandle}
        className={clsx('showBtn', sortedVisibleReviews.length === sortedReviews.length && HIDDEN_CLASS)}
      >
        Show more
      </a>

      {reviews.length === 0 &&
        <OfferReviewEmpty />}
    </>
  );
}
