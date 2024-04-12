import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import HeaderNoAuth from '@/components/common/header-no-auth/header-no-auth';

describe('Component: HeaderNoAuth', () => {
  it('should render correctly', () => {
    const expectedTestId = 'header-no-auth-li';

    renderWithRouterAndProviders(<HeaderNoAuth />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
