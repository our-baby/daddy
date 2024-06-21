import React, { useState } from 'react';
import { Wrapper, Inner, LogoBox, Logo, LoginBtn } from './style';
import LogoImg from '/static/logo.png';
import LoginModal from '@/components/modal/LoginModal';

function Header() {
  // console.log(API_BASE_PATH);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const onClickLoginBtn = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <Wrapper>
        <Inner>
          <LogoBox>
            <Logo>
              <img src={LogoImg} alt="Our Baby" />
            </Logo>
          </LogoBox>
          <ul>
            <li>
              <LoginBtn onClick={onClickLoginBtn}>로그인</LoginBtn>
            </li>
          </ul>
        </Inner>
      </Wrapper>
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </>
  );
}

export default Header;
