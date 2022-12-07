import { SetStateAction, createContext } from 'react';

/**
 * アプリ共通データ管理用Context
 */
export const GlobalContext = createContext({
  // ----------------------------------------------------------------------------------
  // 要素サイズ
  // ----------------------------------------------------------------------------------

  /**
   * ヘッダー高さ（単位：px）
   */
  headerHeight: 0,

  /**
   * ヘッダー高さをセット
   *
   * @params headerHeight ヘッダー高さ（単位：px）
   */
  setHeaderHeight: (headerHeight: SetStateAction<number>): void => {
    // dummy
  },
});
