// pages/_app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '../utils/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import styled from '@emotion/styled';
import { NotificationProvider } from '@/utils/NotificationContext';

const App = styled.div`
  min-width: 400px;
  margin: auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <App>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <NotificationProvider>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
              </NotificationProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </App>
  );
}

export default MyApp;
