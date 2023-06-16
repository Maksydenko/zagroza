import { FC } from "react";

import Title from "@/components/shared/Title/Title";
import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import Card from "./Card/Card";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { Breakpoint } from "@/enums/breakpoint.enum";
import { cards } from "./cards.const";

interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = ({}) => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const cardItems = cards.map((card) => <Card key={card.id} card={card} />);

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
          <SliderSwiper className="benefits">{cardItems}</SliderSwiper>
        ) : (
          <div className="benefits__cards">{cardItems}</div>
        )}
      </div>
    </section>
  );
};

export default Benefits;
