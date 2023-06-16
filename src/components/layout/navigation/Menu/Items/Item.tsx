import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ILink } from "@/components/layout/navigation/links/link.interface";

interface ItemProps {
  link: ILink;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ link: { value, href }, onClick }) => (
  <li className="menu__item">
    <AnchorLink
      href={href}
      offset={100}
      className="menu__link"
      onClick={onClick}
    >
      {value}
    </AnchorLink>
  </li>
);

export default Item;
