import React from "react";
import styles from "./InputCustom.module.css";

interface IInputCustom {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // пусто
  placeholder?: string;
  // FIXME: type
}
export const InputCustom: React.FunctionComponent<IInputCustom> = ({
  value,
  onChange,
  placeholder = "",
  // FIXME: type
}) => {
  return (
    <input
      className={styles["input-custom"]}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      // type={type}
    />
  );
};
