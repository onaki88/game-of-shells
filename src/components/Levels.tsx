import styles from "./levels.module.scss";

import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { setLevel } from "./../store/reducer";

import { LEVEL } from "./../constants/messages";

import { Level } from "./../types/Level";
import { State } from "./../types/State";

const Levels = () => {
  const config = useAppSelector((state) => state.config);
  const state = useAppSelector((state) => state.state);

  const dispatch = useAppDispatch();

  const canClick = state === State.START || state === State.END;

  const handleClick = (i: number) => {
    return canClick ? dispatch(setLevel(i)) : false;
  };

  return (
    <div className={styles.levels}>
      <h6 className={styles.levels__title}>{LEVEL}:</h6>

      <ul>
        {Object.values(Level).map((value, i) => (
          <li className={styles.levels__item} key={i}>
            -{" "}
            <button
              className={`${styles.levels__btn} ${
                config.level === value ? styles["levels__btn--active"] : ""
              } ${!canClick ? styles["levels__btn--disabled"] : ""}`}
              onClick={() => handleClick(i)}
              disabled={!canClick}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Levels;
