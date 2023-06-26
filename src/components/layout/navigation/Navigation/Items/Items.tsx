import { FC } from "react";

import Item from "./Item";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => {
  const items = links.map((link) => {
    const { value } = link;

    return <Item key={value} link={link} />;
  });

  return <ul className="navigation__list">{items}</ul>;
};
export default Items;
