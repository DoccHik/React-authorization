import React from "react";
import styles from "../../styles/modules/LoginPage.module.css";
import { InputCustom } from "../../ui/InputCustom/InputCustom";
import { ButtonCustom } from "../../ui/ButtonCustom/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((err) => console.err(err));
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className={styles["auth-box"]}>
            <div className={styles["auth-form"]}>
              <h1>Регистрация</h1>
              <InputCustom
                value={email}
                type="email"
                placeholder="Введите email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputCustom
                value={password}
                type="password"
                placeholder="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Auth /> */}
              <div className={styles["auth-form-buttons"]}>
                <ButtonCustom
                  title="Войти"
                  onClick={() => navigate("/login")}
                />
                <ButtonCustom
                  title="Зарегистрироваться"
                  onClick={() => handleRegister(email, password)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
