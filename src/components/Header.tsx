import { useEffect } from 'react';

import { useElementSize } from '@/hooks/useElementSize';
import { useGlobalState } from '@/hooks/useGlobalState';

// ----------------------------------------------------------------------------------
// Reactコンポーネント
// ----------------------------------------------------------------------------------

const Header = () => {
  // アプリ共通データ
  const { setHeaderHeight } = useGlobalState();
  // ヘッダーサイズ
  const [refHeader, headerSize] = useElementSize();

  // ヘッダーのサイズをGlobalContextに保持
  useEffect(() => {
    setHeaderHeight(headerSize.height);
    return () => setHeaderHeight(0);
  }, [headerSize.height]);

  return (
    <header ref={refHeader}>
      <div>サンプルフッター</div>
    </header>
  );
};

export default Header;
