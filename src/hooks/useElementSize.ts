import { SetStateAction, useCallback, useEffect, useState } from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

type HTMLElementSize = {
  /** 要素の幅（単位：px） */
  width: number;
  /** 要素の高さ（単位：px） */
  height: number;
};

/**
 * HTML要素のpxサイズ管理用Hook
 *
 *
 * @returns HTML要素参照のsetter
 * @returns HTML要素のpxサイズ
 */
export const useElementSize = <T extends HTMLElement>(): [
  (element: SetStateAction<T | null>) => void,
  HTMLElementSize
] => {
  // HTML要素参照
  const [ref, setRef] = useState<T | null>(null);
  // HTML要素のpxサイズ
  const [size, setSize] = useState<HTMLElementSize>({
    width: 0,
    height: 0,
  });

  /**
   * 画面リサイズ時処理
   */
  const handleResize = useCallback(() => {
    // 要素全体が収まる最小の矩形を取得
    const rect = ref?.getBoundingClientRect();
    if (rect) {
      setSize((preState) => ({
        ...preState,
        width: rect.width,
        height: rect.height,
      }));
    }
  }, [ref?.offsetWidth, ref?.offsetHeight]);

  /**
   * 画面リサイズを画面描画前に行うためuseLayoutEffectを使用
   */
  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [ref?.offsetWidth, ref?.offsetHeight]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // イベントリスナーが累積するのを防ぐためにクリーンアップ処理を実装
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [setRef, size];
};
