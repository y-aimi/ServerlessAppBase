import { Global, css } from '@emotion/react';
import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '@/components/Header';

import { GlobalContextProvider } from '@/contexts/GlobalContextProvider';

// ----------------------------------------------------------------------------------
// CSS
// ----------------------------------------------------------------------------------

const GlobalStyle = css``;

// ----------------------------------------------------------------------------------
// Reactコンポーネント
// ----------------------------------------------------------------------------------

/**
 * アプリ共通レイアウト
 */
const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Head>
        <link rel="icon" />
        <title>APP BASE</title>
      </Head>
      <GlobalContextProvider>
        <Header />
        <main>{children}</main>
      </GlobalContextProvider>
    </>
  );
};
export default GlobalLayout;
