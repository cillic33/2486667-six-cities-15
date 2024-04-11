import { render, screen } from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import MemoLoadingPage from "@/pages/loading-page/loading-page";

describe('Component: Loading page', () => {
  it('should render correctly', () => {
    const loaderTestId = 'loader';

    render(<MemoLoadingPage />);

    expect(screen.getByTestId(loaderTestId)).toBeInTheDocument();
  });
});
