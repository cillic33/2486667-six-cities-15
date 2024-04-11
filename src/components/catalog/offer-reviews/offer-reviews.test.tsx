import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeReview} from "@/utils/mock";
import OfferReviews from "@/components/catalog/offer-reviews/offer-reviews";

describe('Component: OfferReviews', () => {
  it('should render correctly', () => {
    const offerReviewsTestId = 'offer-reviews';
    const mockReview = makeFakeReview();

    renderWithRouterAndProviders(<OfferReviews reviews={[mockReview]}/>);

    expect(screen.getByTestId(offerReviewsTestId)).toBeInTheDocument();
  });
});
