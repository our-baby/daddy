import React from 'react';
import { Wrapper, Inner, LogoBox, Logo, LoginBtn } from './style';
import LogoImg from '/static/logo.png';

function Header() {
  return (
    <Wrapper>
      <Inner>
        <LogoBox>
          <Logo>
            <img src={LogoImg} alt="Our Baby" />
          </Logo>
        </LogoBox>
        <ul>
          <li>
            <LoginBtn>로그인</LoginBtn>
          </li>
        </ul>
      </Inner>
    </Wrapper>
  );
}

export default Header;
