import React from 'react';
import GNB from './nav';
import { Outlet } from 'react-router-dom';
import Header from './header';

function Layout() {
  return (
    <>
      <Header />
      <aside>
        <GNB />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
