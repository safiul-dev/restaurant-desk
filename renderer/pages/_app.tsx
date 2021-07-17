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
export async function getStaticProps() {
  console.log('[Node.js only] ENV_VARIABLE:', process.env.BASE_URL)
  process.env.BASE_URL
  return { props: {} }
}
export default MyApp;

