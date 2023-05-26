import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { ILink } from "../../links/link.interface";

interface IItems {
  link: ILink;
  onClick: () => void;
}

const Item: FC<IItems> = ({ link, onClick }) => (
  <li className="menu__item">
    <AnchorLink
      href={link.path}
      offset={100}
      className="menu__link"
      onClick={onClick}
    >
      {link.value}
    </AnchorLink>
  </li>
);

export default Item;
