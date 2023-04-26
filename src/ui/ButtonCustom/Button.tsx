interface IButtonCustom {
  title: string;
  onClick: () => void;
}

export const ButtonCustom: React.FunctionComponent<IButtonCustom> = ({
  title,
  onClick,
}) => {
  return <button onClick={onClick}>{title}</button>;
};
