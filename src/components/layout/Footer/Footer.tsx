import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Img from "@/components/base/Img/Img";
import Navigation from "../navigation/Navigation/Navigation";
import SocialNetworks from "../navigation/SocialNetworks/SocialNetworks";
import SubscribeEmails from "./SubscribeEmails/SubscribeEmails";

import logo from "@/assets/img/logo.svg";

const Footer: FC = () => {
  const img = {
    src: logo,
    alt: "nice",
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__main">
            <AnchorLink href="#about" offset={100} className="footer__logo">
              <Img className="footer" img={img} defaultStyle={false}></Img>
            </AnchorLink>
            <div className="footer__buttons">
              <Navigation />
              <SocialNetworks className="footer" />
            </div>
          </div>
          <SubscribeEmails />
        </div>
        <div className="footer__copyright">
          <p className="footer__text">
            Nice template by @lopesluiza on Figma - 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
