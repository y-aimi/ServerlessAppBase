import { ReactNode, useContext, useState } from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';

/**
 * アプリ共通データ管理用ContextのProvider
 */
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(GlobalContext);

  // ----------------------------------------------------------------------------------
  // 要素サイズ
  // ----------------------------------------------------------------------------------

  // ヘッダー高さ（単位：px）
  const [headerHeight, setHeaderHeight] = useState<number>(context.headerHeight);

  // ----------------------------------------------------------------------------------
  // Provider作成
  // ----------------------------------------------------------------------------------

  const value = { headerHeight, setHeaderHeight };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
