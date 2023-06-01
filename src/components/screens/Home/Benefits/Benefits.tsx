import { FC, useState } from "react";

import Title from "@/components/shared/Title/Title";
import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import Card from "./Card/Card";

import { useWindowSize } from "@/hooks/useWindowSize";

import { cards } from "./cards.const";
import { Breakpoint } from "@/enums/breakpoint.enum";

interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth > Breakpoint.Mobile);
  };
  useWindowSize(handleResize);

  const cardItems = cards.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <section id="benefits" className="benefits">
      <div className="benefits__container">
        <Title className="benefits">
          Um subtítulo para quem rolou até aqui!
        </Title>
        <p className="benefits__text">
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço. Palavras-chave ajudam no SEO.
        </p>
        {isMobile ? (
          <div className="benefits__cards">{cardItems}</div>
        ) : (
          <SliderSwiper className="benefits">{cardItems}</SliderSwiper>
        )}
      </div>
    </section>
  );
};

export default Benefits;
