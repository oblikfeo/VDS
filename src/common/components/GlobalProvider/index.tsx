'use client';

import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { DOWN_SHEET_PORTAL_ID, MODAL_PORTAL_ID } from '@common/constants/portals';
import { FeatureTogglesContextProvider, getToggles } from '@common/featureToggles';
import { store } from '@common/redux';
import { GlobalStyle } from '@layouts/Lampastar/components/Theme/styled';
import { Wrapper } from '@layouts/Lampastar/components/Wrapper';
import { LIGHT_THEME } from '@layouts/Lampastar/themes/light';

import StyledComponentsRegistry from '../../../lib/registry';
import { ToastsContext } from '../../context';
import { ToastType } from '../../types';
import { Toasts } from '../Toasts';

let toasts: ToastType[] = [];

const initialToggles = getToggles();

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          retryOnMount: false,
          refetchOnWindowFocus: false,
          staleTime: 5 * 60 * 1000,
          cacheTime: 5 * 60 * 1000,
        },
      },
    }),
  );

  const [toastCounter, setToastCounter] = useState(0);

  const addToast = useCallback(
    (toast: ToastType) => {
      toasts = [...toasts, toast];
      setToastCounter(toastCounter + 1);
    },
    [toastCounter],
  );

  const removeToast = useCallback(
    (toastId: string) => {
      toasts = toasts.filter(({ id }) => id !== toastId);
      setToastCounter(toastCounter + 1);
    },
    [toastCounter],
  );

  const toastContext = useMemo(() => ({ addToast, removeToast, toasts }), [addToast, removeToast]);

  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <FeatureTogglesContextProvider value={initialToggles}>
            <ThemeProvider theme={LIGHT_THEME}>
              <GlobalStyle
                backgroundColor={LIGHT_THEME.color.background.main}
                htmlColor={LIGHT_THEME.color.background.secondary}
                textColor={LIGHT_THEME.color.text.primary}
              />
              <ToastsContext.Provider value={toastContext}>
                <Wrapper>{children}</Wrapper>
                <div id={MODAL_PORTAL_ID} />
                <div id={DOWN_SHEET_PORTAL_ID} />
                <Toasts />
              </ToastsContext.Provider>

              <div id={MODAL_PORTAL_ID} />
              <div id={DOWN_SHEET_PORTAL_ID} />
            </ThemeProvider>

            <ReactQueryDevtools initialIsOpen={false} />
          </FeatureTogglesContextProvider>
        </Provider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  );
}
