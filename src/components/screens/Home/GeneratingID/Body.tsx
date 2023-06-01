import { FC } from "react";

import Button from "@/components/shared/Button/Button";

interface BodyProps {}

const Body: FC<BodyProps> = ({}) => {
  return (
    <div className="generating-id__body">
      <span className="generating-id__label">#contecomagente</span>
      <h2 className="generating-id__title">Simples, rápido e do seu jeito.</h2>
      <p className="generating-id__text">
        Mostre os valores da sua marca e como ela pode fazer parte da vida do
        usuário que está lendo. Gerar identificação é a chave para{" "}
        <span>conquistar seu cliente.</span>
      </p>
      <Button className="generating-id" path="/">
        Eu quero!
      </Button>
    </div>
  );
};

export default Body;
