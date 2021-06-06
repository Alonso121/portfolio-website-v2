import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "../styles/icons.module.scss";

const iconsInfo = [
  {
    id: 1,
    link: "https://twitter.com/TahiriAlison",
    alt: "twiter link",
    component: <AiOutlineTwitter />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/alison-tahiri-0421b2205/",
    alt: "linkedin link",
    component: <AiOutlineLinkedin />,
  },
  {
    id: 3,
    link: "https://github.com/Alonso121",
    alt: "github link",
    component: <AiOutlineGithub />,
  },
];

const Icons = () => {
  return (
    <div className={styles.social__icons}>
      {iconsInfo.map(({ alt, component, id, link }) => (
        <a
          key={id}
          className={styles.icon}
          href={link}
          target="_blank"
          alt={alt}
          rel="noopener noreferrer"
        >
          {component}
        </a>
      ))}
    </div>
  );
};

export default Icons;
