import { FC } from "react";

interface ITitleProps {
  className: string;
  children: string;
}

const Title: FC<ITitleProps> = ({ className, children }) => {
  return <h3 className={`${className}__title title`}>{children}</h3>;
};

export default Title;
