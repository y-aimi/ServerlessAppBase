/**
 * axios call method
 *  - get: getメソッド
 *  - post: postメソッド
 */
export const MethodType = {
  get: 'get',
  post: 'post',
} as const;

export type MethodType = typeof MethodType[keyof typeof MethodType];
