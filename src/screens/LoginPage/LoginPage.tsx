import React, { FC } from "react";
import styles from "../../styles/modules/LoginPage.module.css";
import { InputCustom } from "../../ui/InputCustom/InputCustom";
import { ButtonCustom } from "../../ui/ButtonCustom/Button";
import { useDispatch } from "react-redux";
// import { setUser } from "../../store/slices/userSlice.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";

interface ILoginPageStates {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const [email, setEmail] = React.useState<ILoginPageStates>("");
  const [password, setPassword] = React.useState<ILoginPageStates>("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        alert("Авторизация прошла успешно!");
        navigate("/");
      })
      .catch((err) => {
        alert("Пользователь не найден.");
        console.err(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className={styles["auth-box"]}>
            <div className={styles["auth-form"]}>
              <h1>Авторизация</h1>
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
                  onClick={() => handleLogin(email, password)}
                />
                <Link to="/register">Зарегистрироваться</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
