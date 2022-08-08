import React from "react";
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <header>
        <h1>Welcome to Admin Auth</h1>
      </header>
      <>
        <Outlet />
      </>
      <footer>
        mk @ copyright
      </footer>
    </>
  )
}