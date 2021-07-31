import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppLayout from '../AppLayout/AppLayout';
import { loadEnvConfig } from '@next/env'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
     
        <Component {...pageProps} />
      
    </React.Fragment>
  )
}



export default MyApp;

