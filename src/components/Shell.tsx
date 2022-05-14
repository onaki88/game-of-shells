import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { setShell } from "./../store/reducer";

import styles from "./shell.module.scss";

import { ReactComponent as AppShell } from "./../svgs/shell.svg";
import { ReactComponent as ShellCheese } from "./../svgs/cheese.svg";

import { Shell } from "./../types/Shell";
import { State } from "./../types/State";

type Props = {
  shell: Shell;
};

const ShellContainer = ({ shell }: Props) => {
  const state = useAppSelector((state) => state.state);

  const dispatch = useAppDispatch();

  const x = shell.x === 0 && shell.i !== 0 ? shell.i * 200 : shell.x;
  const style = { left: x, top: shell.y };

  const handleClick = () => {
    dispatch(setShell(shell.id));
  };

  return (
    <button
      className={`
        ${styles.shell} 
        ${shell.active ? styles["shell--active"] : ""} 
        ${state !== State.PLAYING ? styles["shell--disabled"] : ""}`}
      onClick={handleClick}
      style={style}
      disabled={state !== State.PLAYING}
    >
      <AppShell className={styles.shell__svg} />
      {shell.cheese && shell.active && (
        <ShellCheese className={styles.shell__cheese} />
      )}
    </button>
  );
};

export default ShellContainer;
