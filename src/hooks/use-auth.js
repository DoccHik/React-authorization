// Проверка, авторизован пользователь или нет
// Если нет, null
// Если да, выдавать авторизационные данные

import { useSelector } from "react-redux";

export const useAuth = () => {
  const { phone, token, email } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    phone,
    token,
    email,
  };
};
