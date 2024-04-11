import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeReview} from '@/utils/mock';
import OfferReviewList from '@/components/catalog/offer-review-list/offer-review-list';

describe('Component: OfferReviewList', () => {
  it('should render correctly', () => {
    const offerReviewListTestId = 'offer-review-list';
    const mockReview = makeFakeReview();

    renderWithRouterAndProviders(<OfferReviewList reviews={[mockReview]} />);

    expect(screen.getByTestId(offerReviewListTestId)).toBeInTheDocument();
  });
});
