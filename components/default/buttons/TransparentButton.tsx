import { FC } from "react";

interface TransparentButtonProps {
  text: string;
}

const TransparentButton: FC<TransparentButtonProps> = ({ text }) => {
  return <button >{text}</button>;
};

export default TransparentButton;
