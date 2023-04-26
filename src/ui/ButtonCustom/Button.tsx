import styles from "./Button.module.css";

interface IButtonCustom {
  title: string;
  onClick: () => void;
}

export const ButtonCustom: React.FunctionComponent<IButtonCustom> = ({
  title,
  onClick,
}) => {
  return (
    <button className={styles["custom-button"]} onClick={onClick}>
      {title}
    </button>
  );
};
