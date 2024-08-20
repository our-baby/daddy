import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from '.';
import { APIResponse } from '@/types/commonResponse';

// authInstance 옵션 처리 필요

/**
 * GET 메소드
 * @param url api 주소
 * @param config axios 옵션
 * @returns data
 */
export const GET = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  const response = await axiosInstance.get<APIResponse<T>>(url, config);
  return response.data;
};

/**
 * POST 메소드
 * @param url api 주소
 * @param data 파라미터
 * @param config axios 옵션
 * @returns data
 */
export const POST = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  const response = await axiosInstance.post<APIResponse<T>>(url, data, config);
  return response.data;
};

/**
 * PUT 메소드
 * @param url api 주소
 * @param data 파라미터
 * @param config axios 옵션
 * @returns data
 */
export const PUT = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  const response = await axiosInstance.put<APIResponse<T>>(url, data, config);
  return response.data;
};

/**
 * DELETE 메소드
 * @param url api 주소
 * @param config axios 옵션
 * @returns data
 */
export const DELETE = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  const response = await axiosInstance.delete<APIResponse<T>>(url, config);
  return response.data;
};
