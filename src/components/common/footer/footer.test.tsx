import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import Footer from '@/components/common/footer/footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const footerTestId = 'footer';

    renderWithRouterAndProviders(<Footer />);

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
