import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import Header from '@/components/common/header/header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const expectedTestId = 'header';

    renderWithRouterAndProviders(<Header />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
