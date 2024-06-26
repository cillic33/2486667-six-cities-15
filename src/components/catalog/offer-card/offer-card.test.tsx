import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakePreviewOfferCard} from '@/utils/mock';
import OfferCard from '@/components/catalog/offer-card/offer-card';

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const offerCardTestId = 'offer-card';
    const mockOfferCard = makeFakePreviewOfferCard();

    renderWithRouterAndProviders(<OfferCard key={mockOfferCard.id} offer={mockOfferCard} block='favorites' />);

    expect(screen.getByTestId(offerCardTestId)).toBeInTheDocument();
  });
});
