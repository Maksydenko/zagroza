import { FC } from "react";

import About from "./About/About";
import Benefits from "./Benefits/Benefits";
import GeneratingID from "./GeneratingID/GeneratingID";
import Contact from "./Contact/Contact";

const Home: FC = () => (
  <>
    <About />
    <Benefits />
    <GeneratingID />
    <Contact />
  </>
);

export default Home;
