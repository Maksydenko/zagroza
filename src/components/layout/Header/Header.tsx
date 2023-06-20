import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Menu from "@/components/layout/navigation/Menu/Menu";
import Img from "@/components/base/Img/Img";
import SocialNetworks from "@/components/layout/navigation/SocialNetworks/SocialNetworks";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowListener } from "@/hooks/useWindowListener";

import { Breakpoint } from "@/enums/breakpoint.enum";

import logo from "@/assets/img/logo.svg";

const Header: FC = () => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const breakpoint = Breakpoint.Tablet;

  // Handle unlock scroll
  interface IHandleUnlockScroll {
    (): void;
  }
  const handleUnlockScroll: IHandleUnlockScroll = () => {
    if (isScrollLocked) {
      setIsScrollLocked(false);
    }
  };

  // Handle unlock scroll on breakpoint
  interface IHandleUnlockScrollOnBreakpoint {
    (): void;
  }
  const handleUnlockScrollOnBreakpoint: IHandleUnlockScrollOnBreakpoint =
    () => {
      const windowWidth = window.innerWidth;
      const isMoreBreakpoint = windowWidth > breakpoint;

      if (isMoreBreakpoint && isScrollLocked) {
        handleUnlockScroll();
      }
    };
  useWindowListener(handleUnlockScrollOnBreakpoint);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakpoint = windowWidth < breakpoint;

    if (isLessBreakpoint) {
      setIsScrollLocked(!isScrollLocked);
    }
  };

  const img = {
    src: logo,
    alt: "nice",
  };

  return (
    <header className="header">
      <div className="header__container">
        <AnchorLink
          href="#about"
          offset={100}
          className="header__logo"
          onClick={handleUnlockScroll}
        >
          <Img className="header" img={img} resetStyle priority></Img>
        </AnchorLink>
        <Menu isLockedScroll={isScrollLocked} onClick={handleClick} />
        <SocialNetworks className="header" />
      </div>
    </header>
  );
};

export default Header;
