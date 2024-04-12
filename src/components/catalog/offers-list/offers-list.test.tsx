import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeCity, makeFakeOfferCard, makeFakeOfferType} from '@/utils/mock';
import OffersList from '@/components/catalog/offers-list/offers-list';

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const offersListTestId = 'offers-list';
    const mockOfferCard = makeFakeOfferCard();
    const mockCity = makeFakeCity();
    const mockOfferType = makeFakeOfferType();

    renderWithRouterAndProviders(<OffersList offers={[mockOfferCard]} currentCity={mockCity} block={mockOfferType} />);

    expect(screen.getByTestId(offersListTestId)).toBeInTheDocument();
  });
});
