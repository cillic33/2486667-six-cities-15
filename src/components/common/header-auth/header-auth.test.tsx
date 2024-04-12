import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import HeaderAuth from '@/components/common/header-auth/header-auth';

describe('Component: HeaderAuth', () => {
  it('should render correctly', () => {
    const footerTestId = 'header-auth-li';

    renderWithRouterAndProviders(<HeaderAuth />);

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
