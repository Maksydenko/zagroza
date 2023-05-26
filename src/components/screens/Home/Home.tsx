import { FC } from "react";

import About from "./About/About";
import Benefits from "./Benefits/Benefits";
import GeneratingID from "./GeneratingID/GeneratingID";
import Contact from "./Contact/Contact";

const Home: FC = () => (
  <main className="home-page">
    <About />
    <Benefits />
    <GeneratingID />
    <Contact />
  </main>
);

export default Home;
