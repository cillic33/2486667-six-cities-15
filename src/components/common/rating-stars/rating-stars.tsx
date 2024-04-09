import {RATING} from './const';
import {Fragment} from 'react';
import {HandleFieldChange} from '@/types/reviews';
import {RequestStatus} from '@/utils/const';
import {useAppSelector} from '@/hooks/store/store';
import {reviewsSelectors} from '@/store/slices/reviews';

type RatingStarsProps = {
  handleFieldChange: HandleFieldChange;
  rating: number;
}

function RatingStars({ handleFieldChange, rating }: RatingStarsProps) {
  const postReviewStatus = useAppSelector(reviewsSelectors.postStatus);

  return (
    <>
      {RATING.map(({value, title}) => (
        <Fragment key={value}>
          <input className="form__rating-input visually-hidden"
            name="rating"
            id={`${value}-stars`}
            type="radio"
            value={value}
            onChange={handleFieldChange}
            checked={Number(rating) === Number(value) && Number(rating) !== 0}
            disabled={postReviewStatus === RequestStatus.Loading}
          />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </>
  );
}

export default RatingStars;
