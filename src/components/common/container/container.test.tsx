import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import Container from '@/components/common/container/container';

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const expectedTestId = 'container-div';
    const mockPageClass = 'page--gray page--main';

    renderWithRouterAndProviders(<Container extraClass={mockPageClass} dataTestid={expectedTestId}><div></div></Container>);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
