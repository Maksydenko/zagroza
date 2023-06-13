import target from "@/assets/img/target.png";
import coin from "@/assets/img/coin.png";
import card from "@/assets/img/card.png";

import { IImg } from "@/interfaces/img.interface";

interface ICard {
  id: number;
  img: IImg;
  title: string;
  text: string;
}

export const cards: ICard[] = [
  {
    id: 1,
    img: {
      src: target,
      alt: "Target",
    },
    title: "Rápido",
    text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
  {
    id: 2,
    img: {
      src: coin,
      alt: "Coin",
    },
    title: "Do seu jeito",
    text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
  {
    id: 3,
    img: {
      src: card,
      alt: "Card",
    },
    title: "Como você queria",
    text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
  },
];
