import Link from "next/link";
import Head from "next/head";

import Footer from "../components/Footer";
import ToTop from "../components/ToTop";
import styles from "../styles/about.module.scss";
import {
  education,
  headerData,
  lang,
  tech,
  workExperience,
} from "../data/aboutData";

const About = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="Here is a brief description of my professional life. Check it out, something might interest you!"
        />
      </Head>
      <main className={styles.main}>
        {/* My personal short description ---------------------------------------- */}
        <section>
          <div className={styles.about__bio}>
            <img
              className={styles.about__bio_image}
              src={headerData.img.src}
              alt={headerData.img.alt}
            />
            <p>{headerData.description}</p>
          </div>
        </section>

        <hr />

        <div className={styles.languages}>
          {/* Tech section ----------------------------------------------------- */}
          <section className={styles.tech}>
            <h1>Tech I use:</h1>
            <div className={styles.tech__pic_container}>
              {tech.map(({ alt, caption, id, src }) => (
                <figure key={id}>
                  <img src={src} alt={alt} className={styles.img} />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Lang section ----------------------------------------------------- */}
          <section className={styles.tech}>
            <h1>Languages I know:</h1>
            <div className={styles.tech__pic_container}>
              {lang.map(({ alt, caption, id, src }) => (
                <figure key={id}>
                  <img src={src} alt={alt} className={styles.img} />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        <hr />

        {/* Education section ----------------------------------------------------- */}
        <section className={styles.section}>
          <h1 className={styles.section__title}>Education</h1>
          {education.map(({ description, id, institution, img, title }) => (
            <div key={id} className={styles.section__institution}>
              <div className={styles.section__description}>
                <h2>{title}</h2>
                <h3>{institution}</h3>
                <p>{description}</p>
              </div>
              <Link href="/img/codecademy.png">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.section__img}
                />
              </Link>
            </div>
          ))}
        </section>

        <hr />

        {/* Work Experience section ----------------------------------------------------- */}
        <section className={styles.section}>
          <h1 className={styles.section__title}>Work Experience</h1>
          {workExperience.map(
            ({ id, institution, period, job, description }) => (
              <div key={id} className={styles.section__description}>
                <h2>{institution}</h2>
                <h3>{job}</h3>
                <p>{period}</p>
                <p>{description}</p>
              </div>
            )
          )}
        </section>

        <ToTop />
        <Footer />
      </main>
    </>
  );
};

export default About;
