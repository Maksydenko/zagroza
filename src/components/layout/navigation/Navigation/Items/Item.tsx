import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ILink } from "../../links/link.interface";

interface IItems {
  link: ILink;
}

const Item: FC<IItems> = ({ link }) => (
  <li className="navigation__item">
    <AnchorLink href={link.path} offset={100} className="navigation__link">
      {link.value}
    </AnchorLink>
  </li>
);

export default Item;
