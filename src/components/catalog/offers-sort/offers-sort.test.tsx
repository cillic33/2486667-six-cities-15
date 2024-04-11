import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import OffersSort from '@/components/catalog/offers-sort/offers-sort';

describe('Component: OffersSort', () => {
  it('should render correctly', () => {
    const offersSortTestId = 'offers-sort';

    renderWithRouterAndProviders(<OffersSort />);

    expect(screen.getByTestId(offersSortTestId)).toBeInTheDocument();
  });
});
