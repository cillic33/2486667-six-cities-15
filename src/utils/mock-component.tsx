import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React, { PropsWithChildren } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import {AppStore, RootState} from '@/types/store';
import {setupStore} from '@/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithRouterAndProviders(
  ui: React.ReactElement,
  {
    route = '/',
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions & { route?: string } = {}
) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Provider store={store}>
            {children}
          </Provider>
        </BrowserRouter>
      </HelmetProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
