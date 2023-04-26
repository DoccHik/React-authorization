// import { useState } from "react";
import styles from "./App.module.css";
import { useState } from "react";
import { InputCustom } from "./ui/InputCustom/InputCustom";
import { ButtonCustom } from "./ui/ButtonCustom/Button";
import { Auth } from "./screens/auth/auth";

// TODO: 1 - сверстать форму авторизации.
// TODO: 2 - Изучить авторизацию на Firebase(поэтапно =) ).
// TODO: 3 - Изучить быстрый курс по TypeScript
// TODO: 4 - Прочитать Promise

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="container">
      <div className={styles["auth-form"]}>
        <h1 className={styles["auth-form__title"]}>Войти</h1>
        <InputCustom
          value={phoneNumber}
          placeholder="Введите номер телефона"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputCustom
          value={email}
          placeholder="Введите email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputCustom
          value={password}
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Auth /> */}
        <div className={styles["auth-form-buttons"]}>
          <ButtonCustom title="Войти" onClick={() => alert("Войти)")} />
          <ButtonCustom
            title="Зарегистрироваться"
            onClick={() => alert("Войти)")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
