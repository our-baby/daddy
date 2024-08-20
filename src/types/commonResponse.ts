// 서버에서 내려주는 응답 구조
export interface APIResponse<T> {
  status: boolean; // 응답 상태
  message?: string; // 메시지
  result: T; // 데이터 내용
}
