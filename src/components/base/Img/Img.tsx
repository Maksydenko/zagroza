import { FC, useRef } from "react";
import Image from "next/image";

import { IImg } from "@/interfaces/img.interface";
import { useLoading } from "@/hooks/useLoading";
import Loader from "@/components/shared/Loader/Loader";

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
  img: { src, alt },
  style,
  defaultStyle = true,
  width = 0,
  height = 0,
}) => {
  const objectRef = useRef<HTMLImageElement>(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={`${className}__img${defaultStyle ? " img" : ""}`}
      style={style}
    >
      {isLoading && <Loader />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        ref={objectRef}
      />
    </div>
  );
};

export default Img;
