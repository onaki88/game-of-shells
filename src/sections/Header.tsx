import styles from "./header.module.scss";

import AppControls from "./../sections/Controls";

import { TITLES } from "./../constants/messages";
import { useAppSelector } from "./../store/hooks";
import { State } from "./../types/State";

const Header = () => {
  const state = useAppSelector((state) => state.state);
  const victory = useAppSelector((state) => state.victory);

  const title = () => {
    switch (state) {
      case State.PENDING:
      case State.SHUFFLING:
        return TITLES.CHEESE;
      case State.END:
        return victory ? TITLES.WON : TITLES.LOST;
      default:
        return TITLES.DEFAULT;
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title()}</h1>
      <AppControls />
    </header>
  );
};

export default Header;
