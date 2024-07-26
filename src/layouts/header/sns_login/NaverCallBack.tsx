import { useEffect } from 'react';
import { POST } from '@/apis/axiosMethod';

type Params = {
  [key: string]: string;
};

const NaverCallBack = () => {
  useEffect(() => {
    const processNaverLogin = async () => {
      // URL의 해시 부분에서 query parameter들을 추출합니다. 이 값들은 access_token, state, token_type, expires_in과 같은 인증 관련 정보를 포함합니다.
      const urlHash = window.location.hash;
      const queryParams =
        urlHash && urlHash.includes('access_token') && urlHash.substring(1).split('&');

      if (!queryParams || !queryParams.length) {
        alert('네이버 계정 인증에 오류가 발생했습니다.');
        window.close();
        return;
      }

      const accessToken = queryParams.shift()?.split('=')[1];
      const params: Params = {};
      // console.log(window.location.hash); //#access_token=AAAAOJ2B7*************&state=4b53e1ff-4b37-44f4-b857-eb93287b5f70&token_type=bearer&expires_in=3600
      // console.log(queryParams); //['access_token=AAAAOJ2B7*************', 'state=4b53e1ff-4b37-44f4-b857-eb93287b5f70', 'token_type=bearer', 'expires_in=3600']

      queryParams.forEach((param) => {
        const [key, value] = param.split('=');
        params[key] = value;
      });

      try {
        const response = await POST('/members/sign-in', params, {
          headers: {
            'certificated-token': accessToken,
          },
        });

        console.log('서버에서 naverLogin 응답 옴!');
        console.log(response);

        // if (response.data.status === 'failure') {
        //   if (response.data.errorCode == '502') {
        //     alert('Artify 계정으로 로그인 하세요');
        //   }
        // }
        // window.location.href = '/'; // 인덱스 페이지로 이동
      } catch (error) {
        // console.error("서버에서 naverlogin 에러 옴!");
        console.error(error);
      }
    };

    processNaverLogin();
  }, []);

  return <div>Processing Naver Login...</div>;
};

export default NaverCallBack;
