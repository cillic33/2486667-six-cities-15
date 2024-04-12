import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import HeaderLogo from '@/components/common/header-logo/header-logo';

describe('Component: HeaderLogo', () => {
  it('should render correctly', () => {
    const expectedTestId = 'header-logo';

    renderWithRouterAndProviders(<HeaderLogo />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
