import { FC } from "react";
import Link from "next/link";

import { handleClassName } from "@/utils/className.util";

interface ButtonProps {
  className: string;
  children: string;
  path: string;
  transparent?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  path,
  transparent,
}) => {
  return (
    <Link
      href={path}
      className={`${className}__button ${handleClassName(
        !!transparent,
        "button",
        "transparent"
      )}`}
    >
      {children}
    </Link>
  );
};

export default Button;
