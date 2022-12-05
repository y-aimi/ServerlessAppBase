import { useContext } from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';

/**
 * アプリ共通データのstate管理用Hook
 */
export const useGlobalState = () => {
  return useContext(GlobalContext);
};
