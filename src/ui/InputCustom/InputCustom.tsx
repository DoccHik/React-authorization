import React from "react";
import styles from "./InputCustom.module.css";

interface IInputCustom {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // пусто
  placeholder?: string;
  // type: string;
}
export const InputCustom: React.FunctionComponent<IInputCustom> = ({
  value,
  onChange,
  placeholder = "",
  // type,
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
