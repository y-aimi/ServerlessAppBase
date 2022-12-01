import Head from 'next/head';
import { ReactNode } from 'react';

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
      <main>{children}</main>
    </>
  );
};
export default Global;
