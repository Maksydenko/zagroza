import { FC } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <div className={`wrapper ${poppins.className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
