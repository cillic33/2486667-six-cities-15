import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeCity} from '@/utils/mock';
import OffersListEmpty from "@/components/catalog/offers-list-empty/offers-list-empty";

describe('Component: OffersListEmpty', () => {
  it('should render correctly', () => {
    const offersListEmptyTestId = 'offers-list-empty';
    const mockCity = makeFakeCity();

    renderWithRouterAndProviders(<OffersListEmpty currentCity={mockCity} />);

    expect(screen.getByTestId(offersListEmptyTestId)).toBeInTheDocument();
  });
});
