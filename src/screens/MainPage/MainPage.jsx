import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  // console.log(isAuth);

  const exitHandler = () => {
    dispatch(removeUser());
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <h1>Welcome! {email}</h1>
      <button onClick={() => exitHandler()}>Выйти c {email}</button>
    </>
  );
};

export default MainPage;
