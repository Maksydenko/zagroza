import type { AppProps } from "next/app";
import "@/assets/scss/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
