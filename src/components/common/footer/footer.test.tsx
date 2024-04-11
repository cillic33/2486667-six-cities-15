import {screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import MemoFooter from '@/components/common/footer/footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const footerTextId = 'footer';

    renderWithRouterAndProviders(<MemoFooter />);

    expect(screen.getByTestId(footerTextId)).toBeInTheDocument();
  });
});
