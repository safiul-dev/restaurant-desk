import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import AppLayout from '../AppLayout/AppLayout';
import Modal from 'react-modal';
Modal.setAppElement('#__next');
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </React.Fragment>
  )
}

export default MyApp
