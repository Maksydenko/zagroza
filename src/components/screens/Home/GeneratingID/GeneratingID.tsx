import { FC } from "react";

import Img from "@/components/base/Img/Img";

import manPhone from "@/assets/img/man-phone.png";
import burger from "@/assets/img/burger.png";
import Body from "./Body";

interface GeneratingIDProps {}

const GeneratingID: FC<GeneratingIDProps> = ({}) => {
  const manImg = {
    src: manPhone,
    alt: "Man with phone",
  };
  const burgerImg = {
    src: burger,
    alt: "Burger",
  };

  return (
    <section id="generating-id" className="generating-id">
      <div className="generating-id__container">
        <Body />
        <div className="generating-id__images">
          <Img className="generating-id" modifier="man" img={manImg} />
          <Img className="generating-id" modifier="burger-1" img={burgerImg} />
          <Img className="generating-id" modifier="burger-2" img={burgerImg} />
          <Img className="generating-id" modifier="burger-3" img={burgerImg} />
          <Img className="generating-id" modifier="burger-4" img={burgerImg} />
        </div>
      </div>
    </section>
  );
};

export default GeneratingID;
