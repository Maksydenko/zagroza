import { FC } from "react";
import Items from "./Items/Items";

import { links } from "../links/links.const";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className="footer__navigation navigation">
      <ul className="navigation__list">
        <Items links={links} />
      </ul>
    </nav>
  );
};

export default Navigation;
