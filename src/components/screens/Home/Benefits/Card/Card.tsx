import { FC } from "react";
import Img from "@/components/base/Img/Img";

import { IImg } from "@/interfaces/img.interface";

interface ICardProps {
  card: {
    img: IImg;
    title: string;
    text: string;
  };
}

const Card: FC<ICardProps> = ({ card: { img, title, text } }) => {
  return (
    <div className="benefits__card card">
      <Img className="card" img={img} />
      <div className="card__body">
        <h4 className="card__title">{title}</h4>
        <p className="card__text">{text}</p>
        <button className="card__button _icon-plus"></button>
      </div>
    </div>
  );
};

export default Card;
