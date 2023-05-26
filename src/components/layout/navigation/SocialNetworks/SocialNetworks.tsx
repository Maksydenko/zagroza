import Link from "next/link";
import { FC } from "react";

interface ISocialNetworksProps {
  className: string;
}

const SocialNetworks: FC<ISocialNetworksProps> = ({ className }) => {
  return (
    <div className={`${className}__social-networks social-networks`}>
      <Link href="/" className="_icon-instagram"></Link>
      <Link href="/" className="_icon-facebook"></Link>
    </div>
  );
};

export default SocialNetworks;
