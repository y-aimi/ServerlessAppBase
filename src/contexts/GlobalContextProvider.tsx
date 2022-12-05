import { ReactNode, useContext } from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';

/**
 * アプリ共通データ管理用ContextのProvider
 */
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(GlobalContext);

  // ----------------------------------------------------------------------------------
  // Provider作成
  // ----------------------------------------------------------------------------------

  const value = {};

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
