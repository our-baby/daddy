import { logOnDev } from '@/utils/Log';
import axios, { Axios, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
/** Axios Response 데이터 형식
 *  config : 요청에 대한 axios 구성 설정
 *  data 서버가 제공한 응답 데이터
 *  headers : 헤더 정보
 *  request : 요청
 *  status : 응답 HTTP 상태 코드
 *  statusText : 응답 HTTP 상태 메시지
 */

const axiosInstance: Axios = axios.create({
  baseURL: APP_BASE_URL + API_BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  logOnDev(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);

  if (method === 'get') {
    console.log(config);
    config.params = {
      ...config.params,
      _t: Date.now(),
    };
    config.timeout = 15000;
  }

  // token 추출 후 넣어주기
  // const token = getCookie(COOKIE_KEY.LOGIN_TOKEN);
  // config.headers.Authorization = token;
  return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  const { method, url } = res.config;
  // 아래 코드, 메시지는 api response 정의 전까지 임시 지정
  const code = res?.status === 200 ? 'SUCCESS' : 'FAIL';
  const message = code === 'SUCCESS' ? '성공' : '실패';

  if (code === 'SUCCESS') {
    logOnDev(`🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${code} : ${message}`);
  } else {
    logOnDev(`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${code} : ${message}`);
  }
  return res;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { method, url } = error.config as InternalAxiosRequestConfig;
    if (error.response) {
      const { statusCode, message } = error.response.data;
      logOnDev(`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`);
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onError);

export default axiosInstance;
