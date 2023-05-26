import { FC } from "react";
import Image from "next/image";

import { IImg } from "@/interfaces/img.interface";

interface IImgProps {
  className: string;
  img: IImg;
  style?: { [property: string]: string };
  defaultStyle?: boolean;
  width?: number;
  height?: number;
}

const Img: FC<IImgProps> = ({
  className,
  img,
  style,
  defaultStyle = true,
  width = 0,
  height = 0,
}) => {
  const { src, alt } = img;

  return (
    <div
      className={`${className}__img${defaultStyle ? " img" : ""}`}
      style={style}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Img;
