import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppLayout from '../AppLayout/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
     <AppLayout>
        <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </AppLayout>
    </React.Fragment>
  )
}



export default MyApp;

