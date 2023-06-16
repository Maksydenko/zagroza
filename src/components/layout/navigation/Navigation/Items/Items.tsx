import { FC } from "react";

import Item from "./Item";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => (
  <>
    {links.map((link) => (
      <Item key={link.href} link={link} />
    ))}
  </>
);
export default Items;
