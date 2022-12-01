import { css } from '@emotion/react';
import { NextPageWithLayout } from 'next';

// ----------------------------------------------------------------------------------
// CSSコンポーネント
// ----------------------------------------------------------------------------------

// emotionサンプル
const MainFrame = (isRed: boolean) => css`
  color: ${isRed ? 'red' : 'blue'};
`;

// ----------------------------------------------------------------------------------
// Reactコンポーネント
// ----------------------------------------------------------------------------------

/**
 * indexページ
 */
const indexPage: NextPageWithLayout = () => {
  return (
    <div css={MainFrame(true)}>
      <h1>APP BASE</h1>
    </div>
  );
};

export default indexPage;
