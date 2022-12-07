import type { AppPropsWithLayout } from 'next/app';
import dynamic from 'next/dynamic';

import GlobalLayout from '@/components/layouts/Global';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // ページで指定されたレイアウト読み込み
  // ※指定がない場合は共通レイアウトを読み込む (https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app)
  const getLayout = Component.getLayout ?? ((page) => <GlobalLayout>{page}</GlobalLayout>);

  // コンポーネントをSPA化して呼び出す (https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr)
  const SafeHydrate = dynamic(() => import('@/components/functional/SafeHydrate'), {
    ssr: false,
  });

  return getLayout(
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
};

export default App;
