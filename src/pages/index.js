import Head from "next/head";

import Footer from "../components/Footer";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alison Tahiri Portfolio</title>
        <meta
          name="description"
          content="Hey! I am Alison Tahiri. Welcome to the landing page of my personal website!"
        />
        <meta
          name="google-site-verification"
          content="-lJNVr3o0jZMLkp20jI4Ker-ZayzmMgzvw9LuaeLO8c"
        />
        <link rel="preload" href="/img/background.jpg" as="image" />
      </Head>

      <main className={styles.home}>
        <section className={styles.my}>
          <h2>Hi! My name is</h2>
          <h1 className={styles.my__name}>
            Alison <span className={styles.my__name__last}>Tahiri</span>
          </h1>
          <h2>I'm a Full Stack Web Developer</h2>
        </section>
        <Footer />
      </main>
    </div>
  );
}
