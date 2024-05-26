import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import theme from '@/shared/theme';

const Wrapper = styled.li`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const NavStyle = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: calc(0.9375rem);
  line-height: calc(1.25rem);
  font-weight: 400;
  gap: 16px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: ${theme.colors.bgColor};
  transition: all 150ms ease 0s;

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(207, 209, 220);
  }
  &.active {
    color: rgb(0, 0, 0);
    background-color: rgb(207, 209, 220);
  }
  & > svg {
    fill: rgb(151, 151, 151);
    width: 20px;
  }
  &:hover > svg,
  &.active > svg {
    fill: rgb(0, 0, 0);
  }
`;

interface MenuInfo {
  to: string;
  text: string;
  activeParam: Array<string>;
  imgEl: JSX.Element;
}

function NavItem(props: { item: MenuInfo }) {
  const { to, text, activeParam, imgEl } = props.item;
  const location = useLocation();

  const isActive = (activeParam: Array<string>) => {
    return (
      activeParam.filter((param) => {
        return (!param && !location.search) || (param && location.search.includes(param));
      }).length > 0
    );
  };

  return (
    <Wrapper>
      <NavStyle href={to} className={isActive(activeParam) ? 'active' : ''}>
        {imgEl}
        <span>{text}</span>
      </NavStyle>
    </Wrapper>
  );
}

export default NavItem;
