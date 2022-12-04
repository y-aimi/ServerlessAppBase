import { AppWord } from '@/common/AppWord';

export default class UtilString {
  /**
   * 文字列が空値（未定義 or 空文字）であるか確認する
   * @param text 判定する文字列
   * @returns true: 空値
   */
  public static isEmptyOrBlank(text: string | null | undefined): text is '' | null | undefined {
    if (this.isEmpty(text)) {
      return true;
    }
    if (this.isBlank(text)) {
      return true;
    }
    return false;
  }

  /**
   * 文字列が未定義であるか確認する
   * @param text 判定する文字列
   * @returns true: 未定義
   */
  public static isEmpty(text: string | null | undefined): text is null | undefined {
    if (this.isUndefined(text)) {
      return true;
    }
    if (this.isNull(text)) {
      return true;
    }
    return false;
  }

  /**
   * 文字列がundefinedであるか確認する
   * @param text 判定する文字列
   * @returns true: undefined
   */
  public static isUndefined(text: string | null | undefined): text is undefined {
    return text === undefined;
  }

  /**
   * 文字列がnullであるか確認する
   * @param text 判定する文字列
   * @returns true: null
   */
  public static isNull(text: string | null | undefined): text is null {
    return text === null;
  }

  /**
   * 文字列が空文字であるか確認する
   * @param text 判定する文字列
   * @returns true: 空文字
   */
  public static isBlank(text: string): boolean {
    return text.length === 0;
  }

  /**
   * 第一引数の文字列を第二引数の長さまでゼロ埋めする
   * @param num 数値文字列
   * @param len 0詰め後の最大文字数
   * @returns
   */
  public static zeroPadding(num: string, len: number) {
    const zeroCnt = len - num.length;
    if (0 < zeroCnt) {
      for (let i = 0; i < zeroCnt; i++) {
        num = '0' + num;
      }
    }
    return num;
  }

  /**
   * 文字列が数値であるか確認する
   * @param text 判定する文字列
   * @returns true: 数値
   */
  public static isNumber(text: string): boolean {
    return !Number.isNaN(parseInt(text));
  }

  /**
   * 数値データ or 数値文字列をカンマ区切りの数値文字列に変換する
   * @param num 数値データ or 数値文字列
   * @returns カンマ区切りの数値文字列
   */
  public static getCommaSeparateNumberString(num: number | string | null | undefined): string {
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    if (num !== null && num !== undefined && UtilString.isNumber(num)) {
      return num.toLocaleString();
    } else {
      return AppWord.DEFAULT_VALUE_NUM;
    }
  }
}
