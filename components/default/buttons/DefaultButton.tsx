import { FC } from "react";

interface DefaultButtonProps {
  className: string;
  text: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default DefaultButton;
