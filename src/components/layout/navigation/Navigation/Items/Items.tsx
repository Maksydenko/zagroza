import { FC } from "react";

import Item from "./Item";

import { ILink } from "../../links/link.interface";

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => (
  <ul className="navigation__list">
    {links.map((link, index) => (
      <Item key={index} link={link} />
    ))}
  </ul>
);
export default Items;
