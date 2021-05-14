import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
            <div className={styles.about__bio__image}>
              <Image
                src={headerData.img.src}
                alt={headerData.img.alt}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
            <p>{headerData.description}</p>
          </div>
        </section>

        <hr className={styles.hr} />

        <div className={styles.languages}>
          {/* Tech section ----------------------------------------------------- */}
          <section className={styles.tech}>
            <h1>Tech I use:</h1>
            <div className={styles.tech__pic__container}>
              {tech.map(({ alt, caption, id, src }) => (
                <figure key={id}>
                  <div className={styles.tech__pic__container__img}>
                    <Image
                      src={src}
                      alt={alt}
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Lang section ----------------------------------------------------- */}
          <section className={styles.tech}>
            <h1>Languages I know:</h1>
            <div className={styles.tech__pic__container}>
              {lang.map(({ alt, caption, id, src }) => (
                <figure key={id}>
                  <div className={styles.tech__pic__container__img}>
                    <Image
                      src={src}
                      alt={alt}
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  </div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        <hr className={styles.hr} />

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
              <Link href={img.src}>
                <div className={styles.section__institution__img}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout={"fill"}
                    objectFit={"cover"}
                  />
                </div>
              </Link>
            </div>
          ))}
        </section>

        <hr className={styles.hr} />

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
