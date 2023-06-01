import { FC } from "react";

interface TitleProps {
  className: string;
  children: string;
}

const Title: FC<TitleProps> = ({ className, children }) => {
  return <h3 className={`${className}__title title`}>{children}</h3>;
};

export default Title;
