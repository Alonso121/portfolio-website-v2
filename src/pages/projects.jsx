import Head from "next/head";
import Image from "next/image";
import { RiGithubLine, RiSearchLine } from "react-icons/ri";

import Footer from "../components/Footer";
import ToTop from "../components/ToTop";
import { projectsData } from "../data/projectsData";
import styles from "../styles/projects.module.scss";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="Here are my personal projects. Feel free to have a look at them!"
        />
      </Head>
      <main className={styles.projects}>
        <section className={styles.projects}>
          <div className={styles.projects__bio__image}>
            <h1>My Personal Projects</h1>
          </div>
          {/* Projects section ----------------------------------------------------- */}
          <div className={styles.projects__items}>
            {projectsData.map(
              ({ description, git, id, img, preload, title, website }) => (
                <div key={id} className={styles.projects__item}>
                  <div className={styles.projects__item__img}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      layout={"fill"}
                      objectFit={"cover"}
                      priority={preload}
                    />
                  </div>
                  <div className={styles.projects__btns}>
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        className={styles.projects__btn}
                        rel="noreferrer"
                      >
                        <RiSearchLine /> Preview
                      </a>
                    )}
                    {git && (
                      <a
                        href={git}
                        target="_blank"
                        className={styles.projects__btn}
                        rel="noreferrer"
                      >
                        <RiGithubLine /> Github
                      </a>
                    )}
                  </div>
                  <h1 style={{ color: "white" }}>{title}</h1>
                  <p className={styles.projects__description}>{description}</p>
                </div>
              )
            )}
          </div>
          <ToTop />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Projects;
