import { FC } from "react";

import Item from "./Item";

import { ILink } from "../../links/link.interface";

interface IItems {
  links: ILink[];
  onClick: () => void;
}

const Items: FC<IItems> = ({ links, onClick }) => (
  <ul className="menu__list">
    {links.map((link, index) => (
      <Item key={index} link={link} onClick={onClick} />
    ))}
  </ul>
);
export default Items;
