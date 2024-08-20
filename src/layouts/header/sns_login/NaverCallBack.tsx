import { useEffect } from 'react';
// import { POST } from '@/apis/axiosMethod';
import useAuthStore from '@/store/AuthStore';
import useUserStore from '@/store/UserStore';
import { axiosInstance } from '@/apis';

const NaverCallBack = () => {
  const { setAccessToken, setRefreshToken } = useAuthStore();
  const { setId, setEmail, setNickname, setJoinType } = useUserStore();
  useEffect(() => {
    const processNaverLogin = async () => {
      // URL의 해시 부분에서 query parameter들을 추출합니다. 이 값들은 access_token, state, token_type, expires_in과 같은 인증 관련 정보를 포함합니다.
      const urlHash = window.location.hash;
      const queryParams =
        urlHash && urlHash.includes('access_token') && urlHash.substring(1).split('&');
      // console.log(window.location.hash); //#access_token=AAAAOJ2B7*************&state=4b53e1ff-4b37-44f4-b857-eb93287b5f70&token_type=bearer&expires_in=3600
      // console.log(queryParams); //['access_token=AAAAOJ2B7*************', 'state=4b53e1ff-4b37-44f4-b857-eb93287b5f70', 'token_type=bearer', 'expires_in=3600']

      if (!queryParams || !queryParams.length) {
        alert('네이버 계정 인증에 오류가 발생했습니다.');
        window.close();
        return;
      }

      const accessToken = queryParams.shift()?.split('=')[1];
      interface Params {
        [key: string]: string;
      }
      const params = queryParams.reduce((acc, cur) => {
        const [key, value] = cur.split('=');
        acc[key] = value;
        return acc;
      }, {} as Params);

      // console.log(accessToken);
      // return;

      try {
        const response = await axiosInstance.post('/members/sign-in', params, {
          headers: {
            'certificated-token': accessToken,
          },
        });

        // console.log(response);

        // api response format 재정의 후 수정 필요
        if (response.status === 200 && response.data?.accessToken && response.data?.refreshToken) {
          setAccessToken(response.data.accessToken);
          setRefreshToken(response.data.refreshToken);
        } else {
          alert('로그인 오류 발생');
        }

        window.opener.location.replace('/');
        window.close();
      } catch (error) {
        console.error(error);
      }
    };

    processNaverLogin();
  }, []);

  return <div>Processing Naver Login...</div>;
};

export default NaverCallBack;
