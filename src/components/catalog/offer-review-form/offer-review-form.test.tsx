import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import OfferReviewForm from '@/components/catalog/offer-review-form/offer-review-form';

describe('Component: OfferReviewForm', () => {
  it('should render correctly', () => {
    const offerReviewFormTestId = 'offer-review-form';
    const mockScrollToTitle = () => {};

    renderWithRouterAndProviders(<OfferReviewForm scrollToTitle={mockScrollToTitle} />);

    expect(screen.getByTestId(offerReviewFormTestId)).toBeInTheDocument();
  });
});
