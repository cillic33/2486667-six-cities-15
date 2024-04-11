import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import OfferReviewEmpty from "@/components/catalog/offer-review-empty/offer-review-empty";

describe('Component: OfferReviewEmpty', () => {
  it('should render correctly', () => {
    const offerReviewEmptyTestId = 'offer-review-empty';

    renderWithRouterAndProviders(<OfferReviewEmpty />);

    expect(screen.getByTestId(offerReviewEmptyTestId)).toBeInTheDocument();
  });
});
