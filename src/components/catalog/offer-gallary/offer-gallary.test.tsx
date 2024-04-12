import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeOfferCard} from '@/utils/mock';
import OfferGallary from '@/components/catalog/offer-gallary/offer-gallary';

describe('Component: OfferGallary', () => {
  it('should render correctly', () => {
    const offerGallaryTestId = 'offer-gallary';
    const mockOfferCard = makeFakeOfferCard();

    renderWithRouterAndProviders(<OfferGallary images={mockOfferCard.images}/>);

    expect(screen.getByTestId(offerGallaryTestId)).toBeInTheDocument();
  });
});
