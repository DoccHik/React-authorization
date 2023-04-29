// Проверка, авторизован пользователь или нет
// Если нет, null
// Если да, выдавать авторизационные данные

import { useSelector } from "react-redux";

export const useAuth = () => {
  const { token, email } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    token,
    email,
  };
};
