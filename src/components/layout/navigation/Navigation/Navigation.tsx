import { FC } from "react";
import Items from "./Items/Items";

import { links } from "../links/links.const";

interface INavigationProps {}

const Navigation: FC<INavigationProps> = ({}) => {
  return (
    <nav className="footer__navigation navigation">
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
