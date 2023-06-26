import { FC } from "react";

import Item from "./Item";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
  onClick: () => void;
}

const Items: FC<ItemsProps> = ({ links, onClick }) => {
  const items = links.map((link) => {
    const { value } = link;

    return <Item key={value} link={link} onClick={onClick} />;
  });

  return <ul className="menu__list">{items}</ul>;
};
export default Items;
