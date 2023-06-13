import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Menu from "@/components/layout/navigation/Menu/Menu";
import Img from "@/components/base/Img/Img";
import SocialNetworks from "../navigation/SocialNetworks/SocialNetworks";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Breakpoint } from "@/enums/breakpoint.enum";

import logo from "@/assets/img/logo.svg";

const Header: FC = () => {
  const {
    isScrollLocked: isLockedScroll,
    setIsScrollLocked: setIsLockedScroll,
  } = useScrollLock();
  const breakpoint = Breakpoint.Tablet;

  // Handle unlock scroll
  interface IHandleUnlockScroll {
    (): void;
  }
  const handleUnlockScroll: IHandleUnlockScroll = () =>
    isLockedScroll && setIsLockedScroll(false);

  // handleBreakpointUnlockScroll
  interface IHandleBreakpointUnlockScroll {
    (): void;
  }
  const handleBreakpointUnlockScroll: IHandleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    const isMoreBreakpoint = windowWidth > breakpoint;
    isMoreBreakpoint && isLockedScroll && handleUnlockScroll();
  };
  useWindowSize(handleBreakpointUnlockScroll);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakpoint = windowWidth < breakpoint;
    isLessBreakpoint && setIsLockedScroll(!isLockedScroll);
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
          <Img className="header" img={img} defaultStyle={false}></Img>
        </AnchorLink>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
        <SocialNetworks className="header" />
      </div>
    </header>
  );
};

export default Header;
