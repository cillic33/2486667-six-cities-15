import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import FavoritesList from '@/components/catalog/favorites-list/favorites-list';
import {makeFakeFavoritesList} from '@/utils/mock';

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const favoritesListTestId = 'favorites-list';
    const favoritesH1Text = 'Saved listing';
    const favorites = makeFakeFavoritesList();

    renderWithRouterAndProviders(<FavoritesList favorites={favorites} />);

    expect(screen.getByTestId(favoritesListTestId)).toBeInTheDocument();
    expect(screen.getByText(favoritesH1Text)).toBeInTheDocument();
  });
});
