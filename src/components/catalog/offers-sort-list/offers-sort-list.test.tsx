import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import OffersSortList from '@/components/catalog/offers-sort-list/offers-sort-list';
import {makeFakeSortOption} from '@/utils/mock';

const IS_ON = true;

describe('Component: OffersSortList', () => {
  it('should render correctly', () => {
    const offersSortListTestId = 'offers-sort-list';
    const mockSortOption = makeFakeSortOption();
    const mockOff = () => {return;}

    renderWithRouterAndProviders(<OffersSortList sortOption={mockSortOption} isOn={IS_ON} off={mockOff} />);

    expect(screen.getByTestId(offersSortListTestId)).toBeInTheDocument();
  });
});
