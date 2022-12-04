import { parse } from 'date-fns';

import UtilString from '@/common/UtilString';

export default class UtilDate {
  /**
   * 日付文字列をDate型に変換
   * @param strDate 日付文字列
   * @param format 日付文字列の書式
   * @returns
   */
  public static formatStringToDate(strDate: string, format: string): Date {
    format.match(/Y/g)?.forEach((str) => {
      format = format.replace(new RegExp(str), 'y');
    });
    format.match(/D/g)?.forEach((str) => {
      format = format.replace(new RegExp(str), 'd');
    });
    format.match(/h/g)?.forEach((str) => {
      format = format.replace(new RegExp(str), 'H');
    });
    return parse(strDate, format, new Date());
  }

  /**
   * Date型の日付データを指定書式の文字列に変換
   *
   *  ※指定文字数に満たなければゼロ埋めする
   *  ※書式文字列
   *   年：Y
   *   月：M
   *   日：D
   *   曜日：week（日本語表記）/ w（インデックス）
   *   時：h（0~23時）
   *   時：k（1~24時）
   *   分：m
   *   秒：s
   *
   * @param date Date型の日付データ
   * @param format 変換後の日付文字列書式
   * @returns 日付文字列
   */
  public static formatDateToString(date: Date, format: string): string {
    let ret = format;

    // 年
    ret.match(/Y+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(date.getFullYear().toString(), str.length));
    });
    // 月
    ret.match(/M+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding((date.getMonth() + 1).toString(), str.length));
    });
    // 日
    ret.match(/D+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(date.getDate().toString(), str.length));
    });
    // 曜日（日本語）
    ret.match(/week/g)?.forEach((str) => {
      ret = ret.replace(/week/, this.getWeekShortNameByNum(date.getDay()));
    });
    // 曜日（インデックス）
    ret.match(/w/g)?.forEach((str) => {
      ret = ret.replace(/w/, date.getDay().toString());
    });
    // 時間（0~23時）
    ret.match(/h+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(date.getHours().toString(), str.length));
    });
    // 時間（1~24時）
    ret.match(/k+/g)?.forEach((str) => {
      let hours = date.getHours();
      if (hours === 0) {
        hours = 24;
      }
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(hours.toString(), str.length));
    });
    // 分
    ret.match(/m+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(date.getMinutes().toString(), str.length));
    });
    // 秒
    ret.match(/s+/g)?.forEach((str) => {
      ret = ret.replace(new RegExp(str), UtilString.zeroPadding(date.getSeconds().toString(), str.length));
    });
    return ret;
  }

  /**
   * string型またはDate型の日付データを指定書式の文字列に変換
   * @param argDate 日付文字列もしくはDate型の日付データ
   * @param outputFormat 変換後の日付文字列書式
   * @param inputFormat 変換元の日付文字列書式
   * @returns
   */
  public static format(argDate: string | Date, outputFormat: string, inputFormat: string): string {
    if (!argDate) {
      return '';
    }

    // 引数の日付データが文字列である場合はDate型に変換
    const date = typeof argDate === 'string' ? this.formatStringToDate(argDate, inputFormat) : argDate;

    return this.formatDateToString(date, outputFormat);
  }

  /**
   * getDay()の返却値0~6を日本語に変換
   * @param num 曜日の数字 0~6
   * @returns
   */
  private static getWeekShortNameByNum(num: number): string {
    const weekNames = ['日', '月', '火', '水', '木', '金', '土'];
    if (num >= weekNames.length) {
      return '';
    }
    return weekNames[num];
  }
}
