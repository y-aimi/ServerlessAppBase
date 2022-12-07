import { useEffect, useLayoutEffect } from 'react';

/**
 * SSR or SSG での動作を考慮したuseLayoutEffectのラッパーHook
 * NOTE: SSR or SSG ではuseLayoutEffectが読み込まれないため、代わりにuseEffectを使用する
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
