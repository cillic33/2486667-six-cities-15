import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import FavoritesListEmpty from '@/components/catalog/favorites-list-empty/favorites-list-empty';

describe('Component: FavoritesListEmpty', () => {
  it('should render correctly', () => {
    const favoritesListEmptyTestId = 'favorites-list-empty';
    const expectedH1Text = 'Favorites (empty)';

    render(<FavoritesListEmpty />);

    expect(screen.getByTestId(favoritesListEmptyTestId)).toBeInTheDocument();
    expect(screen.getByText(expectedH1Text)).toBeInTheDocument();
  });
});
