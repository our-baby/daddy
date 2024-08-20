import React from 'react';
import GNB from './nav';
import { Outlet } from 'react-router-dom';
import Header from './header';
import styled from 'styled-components';
import theme from '@/shared/theme';

const Main = styled.main`
  width: calc(100% - 240px);
  height: calc(100% - ${theme.headerHeight});
  margin-top: ${theme.headerHeight};
  margin-left: 240px;
  background-color: ${theme.colors.bgColor};
`;

function Layout() {
  return (
    <>
      <Header />
      <aside>
        <GNB />
      </aside>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
