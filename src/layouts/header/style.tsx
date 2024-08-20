import styled from 'styled-components';
import theme from '@/shared/theme';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.bgColor};
  z-index: 999;
  border-bottom: 1px solid rgb(54, 54, 54);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  & img {
    max-width: 100%;
    height: 32px;
  }

  & img:last-child {
    margin-left: 10px;
    height: 24px;
  }
`;

export const HeaderUtilCon = styled.ul`
  & li {
    display: flex;
  }
`;

export const LoginBtn = styled.button`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  padding: 6px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: transparent;
  color: #000;
`;

export const MembershipBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;
