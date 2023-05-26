import { FC } from "react";
import Link from "next/link";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/interfaces/img.interface";

import whatsapp from "@/assets/img/whatsapp.png";

interface ITextProps {}

const Text: FC<ITextProps> = ({}) => {
  const whatsappImg: IImg = {
    src: whatsapp,
    alt: "WhatsApp",
  };

  return (
    <div className="contact__text">
      <p className="contact__paragraph">
        Ofereça um meio de comunicação direto. Pode ser um{" "}
        <Link href="/">contato@email.com.br</Link>
      </p>
      <p className="contact__paragraph">
        Ou crie um formulário ao lado que entrem em contato{" "}
        <span>o mais rápido possível!</span>
      </p>
      <div className="contact__whatsapp">
        <Img className="_icon contact" img={whatsappImg} />
        <Link href="/">Hey! Estamos no whatsapp!</Link>
      </div>
    </div>
  );
};

export default Text;
