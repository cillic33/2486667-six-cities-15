import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeOfferCard} from '@/utils/mock';
import OfferDescription from '@/components/catalog/offer-description/offer-description';

describe('Component: OfferDescription', () => {
  it('should render correctly', () => {
    const offerNameTestId = 'offer-name';
    const mockOfferCard = makeFakeOfferCard();

    renderWithRouterAndProviders(<OfferDescription offer={mockOfferCard} />);

    expect(screen.getByTestId(offerNameTestId)).toBeInTheDocument();
  });
});
