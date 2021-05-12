import { useRouter } from "next/router";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "../styles/icons.module.scss";

const Icons = () => {
  const route = useRouter();

  return (
    <div className={styles.social__icons}>
      <a
        className={styles.icon}
        href="https://twitter.com/TahiriAlison"
        target="_blank"
        alt="twitter link"
        rel="noreferrer"
      >
        <AiOutlineTwitter />
      </a>

      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
        alt="linkedin link"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        className={styles.icon}
        href="https://github.com/Alonso121"
        target="_blank"
        alt="github link"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default Icons;
