import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ILink } from "../../links/link.interface";

interface ItemProps {
  link: ILink;
}

const Item: FC<ItemProps> = ({ link: { value, href } }) => (
  <li className="navigation__item">
    <AnchorLink href={href} offset={100} className="navigation__link">
      {value}
    </AnchorLink>
  </li>
);

export default Item;
