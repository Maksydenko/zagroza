import { getModifierClassName } from "@/utils/className.util";
import Link from "next/link";
import { FC } from "react";

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
  transparent = false,
}) => {
  return (
    <Link
      href={path}
      className={`${className}__button ${getModifierClassName(
        transparent,
        "button",
        "transparent"
      )}`}
    >
      {children}
    </Link>
  );
};

export default Button;
