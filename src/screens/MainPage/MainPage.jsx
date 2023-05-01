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
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            // backgroundColor: "#eee",
            padding: "20px 0px 20px 0px",
          }}
        >
          Welcome! <span>{email}</span>
        </h1>

        <button
          style={{
            background: "#333",
            color: "#fff",
            padding: "10px 20px",
            textAlign: "center",
            margin: "0px auto 0px auto",
            display: "block",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={() => exitHandler()}
        >
          Выйти c {email}
        </button>
      </div>
    </>
  );
};

export default MainPage;
