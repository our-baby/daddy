import styled from 'styled-components';
// useEffect 와 같이 기본으로 제공하는 훅이기에 같이 import 해주자.
import { useEffect, useRef } from 'react';
import naverIcon from '@/assets/images/naver_icon.png';

const NaverLogin = () => {
  const naverRef = useRef<HTMLInputElement>(null);
  const { naver } = window;

  const NAVER_CALLBACK_URL = APP_BASE_URL + NAVER_LOGIN_CALLBACK_PATH;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      // 위에 Client Id 랑 Callback Url 적었는데 ? 라고 혹시 생각한다면
      // 변수 처리를 해준 것이기에 그냥 넘어가면 된다.
      clientId: NAVER_APP_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: true,
      loginButton: { color: 'green', type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  // handleClick 함수 onClick 이벤트 발생 시 useRef 를 통해 지정한 naverRef 항목이 클릭 된다.
  // current 를 통해 아래 div 태그의 ref={} 속성을 줄 수 있다. ( 자세한 내용은 공식문서를 확인하자. )
  const handleNaverLogin = () => {
    if (naverRef.current) {
      const naverEl = naverRef.current.children[0] as HTMLElement;
      naverEl.click();
    }
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <img src={naverIcon} alt="네이버" />
        <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
};

export default NaverLogin;

// 이 부분부터 styled-components 로 작성 된 코드이기에 css 를 사용한다면 잠시 코드 아래의 설명을 보고 오자!

// 기존 로그인 버튼이 아닌 커스텀을 진행한 로그인 버튼만 나타내기 위해 작성
const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  background-color: #03c75a;
  border-radius: 6px;

  > img {
    position: absolute;
    left: 10px;
    width: 30px;
  }
`;

const NaverLoginTitle = styled.span`
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
