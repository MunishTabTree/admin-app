import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';


export default function MainLayout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const makeLogin = () => {
    navigate('/auth')
  }

  const makeLogout = () => {
    dispatch({ type: 'logout' })
    navigate('/auth')
  }
  return (
    <>
      <header>
        <h1>Welcome to Admin</h1>
        {user.logged_in ? (<p onClick={makeLogout}>logout</p>) : (<button onClick={makeLogin}>login please</button>)}
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