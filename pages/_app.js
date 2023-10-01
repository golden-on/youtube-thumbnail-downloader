import Layout from '@/components/Layout';
import React from 'react';
import '../app/globals.css';

const MyApp = ({ Component, pageProps }) => {

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
