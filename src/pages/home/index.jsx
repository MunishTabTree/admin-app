import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
export default function HomePage() {

  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  console.log(user)
  useEffect(() => {
    if (!user.logged_in) {
      return navigate('/auth')
    }
  })
  return (
    <>
      <h1>
        Welcome To Home Screen MK
      </h1>
    </>
  )
}