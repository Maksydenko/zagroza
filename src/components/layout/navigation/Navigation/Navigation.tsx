import { FC } from "react";
import Items from "./Items/Items";

import { links } from "@/components/layout/navigation/links/links.const";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className="footer__navigation navigation">
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
