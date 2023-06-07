import { FC } from "react";
import Link from "next/link";

import { links } from "./links.const";

interface SocialNetworksProps {
  className: string;
}

const SocialNetworks: FC<SocialNetworksProps> = ({ className }) => {
  return (
    <div className={`${className}__social-networks social-networks`}>
      {links.map((link) => (
        <Link
          key={link.value}
          href={link.href}
          className={`_icon-${link.value}`}
        ></Link>
      ))}
    </div>
  );
};

export default SocialNetworks;
