import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import OfferReviewItem from "@/components/catalog/offer-review-item/offer-review-item";
import {makeFakeReview} from "@/utils/mock";

describe('Component: OfferReviewItem', () => {
  it('should render correctly', () => {
    const offerReviewItemTestId = 'offer-review-item';
    const mockReview = makeFakeReview();

    renderWithRouterAndProviders(<OfferReviewItem review={mockReview} key={mockReview.id} />);

    expect(screen.getByTestId(offerReviewItemTestId)).toBeInTheDocument();
  });
});
