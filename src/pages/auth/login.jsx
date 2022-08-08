import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  useEffect(() => {
    if (user.logged_in) {
      return navigate('/')
    }
  }, [])
  return (
    <>
      <h1>Login page</h1>
      <button onClick={() => {
        dispatch({ type: 'login', payload: { 'name': "munish" } })
        navigate('/')
      }}>login</button>
    </>
  )
}