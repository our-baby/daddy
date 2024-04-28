import React from 'react'
import GNB from './nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <GNB />
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout