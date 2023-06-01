import { FC } from "react";

import Img from "@/components/base/Img/Img";
import Button from "@/components/shared/Button/Button";

import men from "@/assets/img/man.png";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const img = {
    src: men,
    alt: "Man",
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__body">
          <h1 className="about__title">Um slogan chamativo aqui.</h1>
          <p className="about__text">
            Um texto sobre o seu produto ou serviço. Explique{" "}
            <span>porque ele é valioso</span> e direcione o usuário ao próximo
            objetivo.
          </p>
          <div className="about__buttons">
            <Button className="about" path="/">
              Eu quero!
            </Button>
            <Button className="about" path="/" transparent>
              Conhecer mais
            </Button>
          </div>
        </div>
        <Img className="about" img={img} />
      </div>
    </section>
  );
};

export default Main;
