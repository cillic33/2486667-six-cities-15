import {screen, waitFor} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {AppRoute} from '@/utils/const';
import App from '@/components/common/app/app';

describe('Component: App', () => {
  it('should render "MainPage" when route to "AppRoute.Root"', async () => {
    const expectedTestId = 'main-page';

    renderWithRouterAndProviders(<App />, { route: AppRoute.Root });

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });

  it('should render "LoginPage" when route to "AppRoute.Login"', async () => {
    const expectedTestId = 'login-page';

    renderWithRouterAndProviders(<App />, { route: AppRoute.Login });

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });

  it('should render "NotFoundPage" when route to "AppRoute.NotFound"', async () => {
    const expectedTestId = 'not-found-page';
    const expectedH1Text = '404. Page not found';
    const nonExistentPageRoute = '/a-non-existent-page';

    renderWithRouterAndProviders(<App />, { route: nonExistentPageRoute });

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
    expect(screen.getByText(expectedH1Text)).toBeInTheDocument();
  });
});
