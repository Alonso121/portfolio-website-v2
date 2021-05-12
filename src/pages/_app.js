import "../styles/globals.scss";
import Nav from "../components/Nav";
import Icons from "../components/Icons";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Icons />
    </>
  );
}

export default MyApp;
