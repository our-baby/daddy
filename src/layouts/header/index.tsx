import React, { useState } from 'react';
import { Wrapper, Inner, Logo, HeaderUtilCon, LoginBtn, MembershipBtn } from './style';
import LogoImg from '/static/logo.png';
import LogoImgText from '/static/logo_text.png';
import LoginModal from '@/components/modal/LoginModal';
import useAuthStore from '@/store/AuthStore';

function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { accessToken, resetTokens } = useAuthStore();

  const onClickLoginBtn = () => {
    setIsLoginModalOpen(true);
  };

  const onClickLogoutBtn = () => {
    resetTokens();
  };

  const onClickMemberBtn = () => {
    location.replace('/mypage');
  };

  return (
    <>
      <Wrapper>
        <Inner>
          <h1>
            <Logo to="/">
              <img src={LogoImg} alt="Our Baby" />
              <img src={LogoImgText} alt="Our Baby" />
            </Logo>
          </h1>
          <HeaderUtilCon>
            <li>
              {accessToken ? (
                // 프로필 이미지 받아오면 처리
                // <MembershipBtn
                //   // style={{ backgroundImage: '' }}
                //   style={{ backgroundColor: 'blue' }}
                //   onClick={onClickMemberBtn}></MembershipBtn>
                <LoginBtn onClick={onClickLogoutBtn}>로그아웃</LoginBtn>
              ) : (
                <LoginBtn onClick={onClickLoginBtn}>로그인</LoginBtn>
              )}
            </li>
          </HeaderUtilCon>
        </Inner>
      </Wrapper>
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </>
  );
}

export default Header;
