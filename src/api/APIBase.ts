import AxiosStatic, { AxiosResponse } from 'axios';

import Axios from '@/api/AxiosConfig';

import { MethodType } from '@/types/MethodType';

/** 共通ヘッダーパラメータ */
const headers = {
  'Content-Type': 'application/json',
};

/**
 * POSTリクエスト
 *
 * @param url リクエストURL
 * @param params リクエストボディパラメータ
 * @returns
 */
export async function post<RequestType, ResponseType>(url: string, params: RequestType) {
  return request<RequestType, ResponseType>(url, MethodType.post, params);
}

/**
 * リクエスト
 *
 * @param url リクエストURL
 * @param method リクエストメソッド
 * @param params リクエストパラメータ
 * @returns
 */
async function request<RequestType, ResponseType>(url: string, method: MethodType, params: RequestType) {
  try {
    const response: AxiosResponse<ResponseType> = await Axios.request({
      url: url,
      method: method,
      data: params, // bodyパラメータ
      headers: headers,
      timeout: 30000, // TODO: タイムアウト設計に基づいて修正
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    // TODO: 設計に基づいてエラーハンドリングを修正
    if (AxiosStatic.isAxiosError(error)) {
      switch (error.response?.status) {
        case 400:
        case 401:
        case 404:
        case 500:
          showErrorAlert(`通信エラー：${error.response.status} ${error.response.statusText}`);
          break;
        default:
          showErrorAlert('予期せぬ通信エラー');
      }
    } else {
      showErrorAlert('予期せぬ通信エラー');
    }
    return undefined;
  }
}

/**
 * APIエラーアラートを表示
 *
 * @param message アラートメッセージ
 */
const showErrorAlert = (message: string) => {
  if (alert(message) === undefined) {
    // TODO: OKボタン押下時の処理を実装
  }
};
