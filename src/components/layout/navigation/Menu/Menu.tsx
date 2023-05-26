import { FC } from "react";

import Items from "./Items/Items";

import { getModifierClassName } from "@/utils/className.util";

import { links } from "../links/links.const";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

interface MenuProps {
  isLockedScroll: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={getModifierClassName(isLockedScroll, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={getModifierClassName(isLockedScroll, "menu__body")}>
      <Items links={links} onClick={onClick} />
    </nav>
    <SocialNetworks className="menu" />
  </div>
);

export default Menu;
