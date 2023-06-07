import { FC } from "react";

import Item from "./Item";

import { ILink } from "../../links/link.interface";

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => (
  <>
    {links.map((link) => (
      <Item key={link.path} link={link} />
    ))}
  </>
);
export default Items;
