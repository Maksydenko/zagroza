import { FC } from "react";
import Link from "next/link";

import { links } from "./links.const";

interface SocialNetworksProps {
  className: string;
}

const SocialNetworks: FC<SocialNetworksProps> = ({ className }) => {
  const items = links.map((link) => {
    const { value, href } = link;

    return <Link key={value} href={href} className={`_icon-${value}`}></Link>;
  });

  return (
    <div className={`${className}__social-networks social-networks`}>
      {items}
    </div>
  );
};

export default SocialNetworks;
