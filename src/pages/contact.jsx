import Head from "next/head";
import { BsPhone } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";

import Footer from "../components/Footer";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>My contact page</title>
        <meta
          name="description"
          content="Hey guys. Here are my contact details. Let's discuss our next project or simply say hi!"
        />
        <link rel="preload" href="/img/background.jpg" as="image" />
      </Head>

      <main className={styles.contact}>
        <section className={styles.container}>
          <h1>Let's get in touch:</h1>

          <ul className={styles.contact__list}>
            <li>
              <HiOutlineMailOpen />
              Email:
              <div>
                <a
                  className={styles.link}
                  href="mailto:alison.tahiri@gmail.com"
                >
                  alison.tahiri@gmail.com
                </a>
              </div>
            </li>
            <li>
              <BsPhone />
              Phone:
              <div>+355 69 23 10 911</div>
            </li>
            <li>
              <ImLocation />
              Address:
              <div>Gramoz Pashko St., Tirana, Albania</div>
            </li>
          </ul>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
