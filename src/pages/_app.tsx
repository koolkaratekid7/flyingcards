import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../app/store';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import Ad from '../components/Ads';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Head>
              <link rel="icon" href="/fcicon.ico" />
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5406034099856189"
                crossOrigin="anonymous"></script>
            </Head>
            <Ad />
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;