import { FC } from "react";

import Items from "./Items/Items";
import SocialNetworks from "@/components/layout/navigation/SocialNetworks/SocialNetworks";

import { handleClassName } from "@/utils/className.util";

import { links } from "@/components/layout/navigation/links/links.const";

interface MenuProps {
  isLockedScroll: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={handleClassName(isLockedScroll, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={handleClassName(isLockedScroll, "menu__body")}>
      <Items links={links} onClick={onClick} />
    </nav>
    <SocialNetworks className="menu" />
  </div>
);

export default Menu;
