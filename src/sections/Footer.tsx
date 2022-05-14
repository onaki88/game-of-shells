import styles from "./footer.module.scss";

import AppScore from "./../components/Score";
import { useAppSelector } from "./../store/hooks";

const Footer = () => {
  const score = useAppSelector((state) => state.score);
  return (
    <footer className={styles.footer}>
      <AppScore score={score} />
    </footer>
  );
};

export default Footer;
