import LoadingPage from "@/pages/loading-page/loading-page";
import { render, screen } from '@testing-library/react';
import {describe, it, expect} from 'vitest';

describe('Component: Loading page', () => {
  it('should render correctly', () => {
    const loaderTestId = 'loader';

    render(<LoadingPage />);
    const loader = screen.getByTestId(loaderTestId);

    expect(loader).toBeInTheDocument();
  });
});
