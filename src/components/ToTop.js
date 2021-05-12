import Link from "next/link";
import Image from "next/image";
import { CgArrowUpO } from "react-icons/cg";

import styles from "../styles/toTop.module.scss";

const ToTop = () => {
  return (
    <Link href="">
      <div className={styles.to_top}>
        <CgArrowUpO />
      </div>
    </Link>
  );
};

export default ToTop;
