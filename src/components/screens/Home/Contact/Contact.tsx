import { FC } from "react";

import Img from "@/components/base/Img/Img";
import Title from "@/components/shared/Title/Title";

import chat from "@/assets/img/chat.png";
import Text from "./Text";
import Form from "./Form";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const chatImg = {
    src: chat,
    alt: "Chat",
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <Img className="_logo contact" img={chatImg} />
        <Title className="contact">Ainda tem dúvidas? Fale conosco!</Title>
        <div className="contact__body">
          <Text />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
