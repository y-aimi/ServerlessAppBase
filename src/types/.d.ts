import type { NextPage, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

declare module 'next' {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
