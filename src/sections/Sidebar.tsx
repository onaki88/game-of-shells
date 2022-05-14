import styles from "./sidebar.module.scss";

import AppLevels from "./../components/Levels";

import { ReactComponent as AppLogo } from "./../svgs/logo.svg";
import { ReactComponent as Jerry } from "./../svgs/jerry.svg";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <AppLogo className={styles.logo} />
      <AppLevels />
      <Jerry className={styles.jerry} />
    </aside>
  );
};

export default Sidebar;
