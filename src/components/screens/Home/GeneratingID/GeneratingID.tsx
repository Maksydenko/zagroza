import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/interfaces/img.interface";

import manPhone from "@/assets/img/man-phone.png";
import burger from "@/assets/img/burger.png";
import Body from "./Body";

interface IGeneratingIDProps {}

const GeneratingID: FC<IGeneratingIDProps> = ({}) => {
  const manImg: IImg = {
    src: manPhone,
    alt: "Man with phone",
  };
  const burgerImg: IImg = {
    src: burger,
    alt: "Burger",
  };
  return (
    <section id="generating-id" className="generating-id">
      <div className="generating-id__container">
        <Body />
        <div className="generating-id__image">
          <Img className="_man generating-id" img={manImg} />
          <Img className="_burger-1 generating-id" img={burgerImg} />
          <Img className="_burger-2 generating-id" img={burgerImg} />
          <Img className="_burger-3 generating-id" img={burgerImg} />
          <Img className="_burger-4 generating-id" img={burgerImg} />
        </div>
      </div>
    </section>
  );
};

export default GeneratingID;
