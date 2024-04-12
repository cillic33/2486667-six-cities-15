import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeOfferCard} from '@/utils/mock';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';

describe('Component: OfferOtherPlaces', () => {
  it('should render correctly', () => {
    const offerOtherPlacesTestId = 'offer-other-places';
    const mockNearOffer = makeFakeOfferCard();

    renderWithRouterAndProviders(<OfferOtherPlaces offers={[mockNearOffer]}/>);

    expect(screen.getByTestId(offerOtherPlacesTestId)).toBeInTheDocument();
  });
});
