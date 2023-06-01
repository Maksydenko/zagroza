import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Menu from "@/components/layout/navigation/Menu/Menu";
import Img from "@/components/base/Img/Img";
import SocialNetworks from "../navigation/SocialNetworks/SocialNetworks";

import { useLockScroll } from "@/hooks/useLockScroll";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Breakpoint } from "@/enums/breakpoint.enum";

import logo from "@/assets/img/logo.svg";

const Header: FC = () => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
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
    windowWidth >= breakpoint && handleUnlockScroll();
  };
  useWindowSize(handleBreakpointUnlockScroll, isLockedScroll);

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    const windowWidth = window.innerWidth;
    windowWidth <= breakpoint && setIsLockedScroll(!isLockedScroll);
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
