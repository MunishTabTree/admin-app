import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


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
        <h1>Welcome to Admin "{user.user ? user.user.name : null}"</h1>
        <>
          <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                {user.logged_in ? (
                  <p onClick={makeLogout}>logout</p>
                ) : (
                  <button onClick={makeLogin}>login please</button>
                )}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
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