import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import theme from '@/shared/theme';
import GNB from './nav';
import Header from './header';

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
