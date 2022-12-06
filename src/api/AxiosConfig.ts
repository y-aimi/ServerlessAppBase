import Axios from 'axios';

/**
 * axiosのインスタンス設定
 */
const AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
