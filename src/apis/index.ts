import useAuthStore from '@/store/AuthStore';
import { logOnDev } from '@/utils/Log';
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig, AxiosInstance } from 'axios';
/** Axios Response 데이터 형식
 *  config : 요청에 대한 axios 구성 설정
 *  data 서버가 제공한 응답 데이터
 *  headers : 헤더 정보
 *  request : 요청
 *  status : 응답 HTTP 상태 코드
 *  statusText : 응답 HTTP 상태 메시지
 */

axios.defaults.withCredentials = true;
axios.defaults.baseURL = APP_BASE_URL + API_BASE_PATH;
axios.defaults.headers.head = { 'Content-Type': 'application/json' };
axios.defaults.timeout = 10000;

const setInterceptors = (instance: AxiosInstance, isAuth?: boolean) => {
  const { accessToken, refreshToken } = useAuthStore.getState();
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

    if (isAuth && config.headers && accessToken) config.headers['Authorization'] = accessToken;

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
    // token 만료에 따른 처리 추가 필요
    if (axios.isAxiosError(error)) {
      const { method, url } = error.config as InternalAxiosRequestConfig;
      if (error.response) {
        const { statusCode, message } = error.response.data;
        logOnDev(`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`);
      }
    } else {
      logOnDev(`🚨 [API] | Error ${error.message}`);
    }

    // // access token 만료시
    // if (error.response.data.error_code === 'A01') {
    //   // refresh token으로 access token 재발급
    //   return instance.request(error.config);
    // }

    // // refresh token 만료시
    // if (error.response.data.error_code === 'A08') {
    //   // 로그아웃
    // }

    return Promise.reject(error);
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponse, onError);

  return instance;
};

const createInstance = () => {
  const instance = axios.create();
  return setInterceptors(instance);
};

const authCreateInstance = () => {
  const instance = axios.create();
  return setInterceptors(instance, true);
};

export const axiosAuthInstance = authCreateInstance();
export const axiosInstance = createInstance();
