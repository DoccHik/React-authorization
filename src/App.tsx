// import { useState } from "react";
import styles from "./App.module.css";
import { useState } from "react";
import { InputCustom } from "./ui/InputCustom/InputCustom";
import { ButtonCustom } from "./ui/ButtonCustom/Button";
import { Auth } from "./screens/auth/auth";

// TODO: 1 - Cверстать форму авторизации.
// TODO: 2 - Изучить авторизацию на Firebase(поэтапно =) ).
// TODO: 3 - Изучить быстрый курс по TypeScript
// TODO: 4 - Прочитать Promise

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles["auth-box"]}>
          <div
            className={styles[isAuth ? "auth-gradient" : "auth-gradient-dif"]}
          >
            <h1 className={styles["auth-gradient__title"]}>
              {isAuth ? (
                <h1 className={styles["auth-form__title"]}>Авторизация</h1>
              ) : (
                <h1 className={styles["auth-form__title"]}>Регистрация</h1>
              )}
            </h1>
            {isAuth ? (
              <p>Введите данные учетной записи чтобы войти в личный кабинет.</p>
            ) : (
              <p>Заполните поля чтобы зарегистрировать личный кабинет</p>
            )}
          </div>
          <div className={styles["auth-form"]}>
            {/* <h1 className={styles["auth-form__title"]}>Войти</h1> */}
            <InputCustom
              value={phoneNumber}
              type="tel"
              placeholder="Введите номер телефона"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {isAuth && (
              <InputCustom
                value={email}
                type="email"
                placeholder="Введите email"
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <InputCustom
              value={password}
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Auth /> */}
            <div className={styles["auth-form-buttons"]}>
              <ButtonCustom title="Войти" onClick={() => setIsAuth(true)} />
              <ButtonCustom
                title="Зарегистрироваться"
                onClick={() => setIsAuth(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
