import { FC } from "react";

import Meta from "./Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

interface LayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${poppins.className}`}>
      <Header />
      <main className={`${className}-page`}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
