import {FormEvent, useEffect, useState} from 'react';
import RatingStars from '@/components/common/rating-stars/rating-stars';
import {HandleFieldChange, PostReviewBody} from '@/types/reviews';
import {useParams} from 'react-router-dom';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {reviewsActions, reviewsSelectors} from '@/store/slices/reviews';
import {RequestStatus} from '@/utils/const';
import {toast} from 'react-toastify';
import {
  MAX_REVIEW_LENGTH,
  MIN_REVIEW_LENGTH,
  SUBMIT_SUCCESS_MESSAGE
} from '@/components/catalog/offer-review-form/const';

type OfferReviewFormProps = {
  scrollToTitle: () => void;
}

function OfferReviewForm({ scrollToTitle }: OfferReviewFormProps): JSX.Element {
  const { id } = useParams();
  const [formData, setFormData] = useState<Omit<PostReviewBody, 'offerId'>>({
    comment: '',
    rating: 0,
  });
  const { postReview } = useActionCreators(reviewsActions);
  const postReviewStatus = useAppSelector(reviewsSelectors.postStatus);
  const isSubmitDisabled =
    (formData.rating) === 0 ||
    (formData.comment).length < MIN_REVIEW_LENGTH ||
    (formData.comment).length > MAX_REVIEW_LENGTH ||
    postReviewStatus === RequestStatus.Loading;
  const isCommentDisabled = postReviewStatus === RequestStatus.Loading;

  const handleFieldChange: HandleFieldChange = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const postReviewBody: PostReviewBody = {
      offerId: id as string,
      comment: formData.comment,
      rating: Number(formData.rating),
    };

    postReview(postReviewBody);
  };

  useEffect(() => {
    if (postReviewStatus === RequestStatus.Success) {
      toast.info(SUBMIT_SUCCESS_MESSAGE);
      setFormData({
        comment: '',
        rating: 0,
      });
      scrollToTitle();
    }
  }, [postReviewStatus, scrollToTitle]);

  return (
    <form className="reviews__form form" action="#" method="post" data-testid="offer-review-form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStars handleFieldChange={handleFieldChange} rating={formData.rating} />
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={formData.comment}
        disabled={isCommentDisabled}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
