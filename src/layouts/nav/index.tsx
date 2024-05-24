import React from 'react';
import styled from 'styled-components';
import theme from '@/shared/theme';
import NavItem from './NavItem';
import Icon from '@/components/icon';

const Wrapper = styled.nav`
  position: fixed;
  top: 56px;
  left: 0;
  width: 240px;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bgColor};
  padding: 16px 16px 32px;
  border-right: 1px solid rgb(54, 54, 54);
  overflow: hidden auto;
  z-index: 100;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  color: rgb(151, 151, 151);
`;

function GNB() {
  const navMenus = [
    {
      to: '/',
      text: '전체',
      activeParam: [''],
      imgEl: <Icon size={20} icon="tag_all" />,
    },
    {
      to: '?filter=pregnancy',
      text: '임신',
      activeParam: ['pregnancy'],
      imgEl: <Icon size={20} icon="tag_pregnancy" />,
    },
    {
      to: '?filter=birth',
      text: '출산',
      activeParam: ['birth'],
      imgEl: <Icon size={20} icon="tag_birth" />,
    },
    {
      to: '?filter=parenting',
      text: '육아',
      activeParam: ['parenting'],
      imgEl: <Icon size={20} icon="tag_parenting" />,
    },
    {
      to: '?filter=policy',
      text: '정책',
      activeParam: ['policy'],
      imgEl: <Icon size={20} icon="tag_policy" />,
    },
    {
      to: '?filter=health',
      text: '건강',
      activeParam: ['health'],
      imgEl: <Icon size={20} icon="tag_health" />,
    },
  ];

  return (
    <Wrapper>
      <MenuList>
        {navMenus.map((menu) => (
          <NavItem key={menu.text} item={menu} />
        ))}
      </MenuList>
    </Wrapper>
  );
}

export default GNB;
