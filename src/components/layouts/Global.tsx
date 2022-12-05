import Head from 'next/head';
import { ReactNode } from 'react';

import { GlobalContextProvider } from '@/contexts/GlobalContextProvider';

// ----------------------------------------------------------------------------------
// Reactコンポーネント
// ----------------------------------------------------------------------------------

/**
 * アプリ共通レイアウト
 */
const Global = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" />
        <title>APP BASE</title>
      </Head>
      <GlobalContextProvider>
        <main>{children}</main>
      </GlobalContextProvider>
    </>
  );
};
export default Global;
