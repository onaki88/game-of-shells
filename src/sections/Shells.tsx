import styles from "./shells.module.scss";

import AppShell from "./../components/Shell";

import { useAppSelector } from "./../store/hooks";

const Shells = () => {
  const shells = useAppSelector((state) => state.shells);
  const style = { width: 200 * shells.length };

  return (
    <main className={styles.game}>
      <section className={styles.shells} style={style}>
        {shells.map((shell) => (
          <AppShell key={shell.id} shell={shell}></AppShell>
        ))}
      </section>
    </main>
  );
};

export default Shells;
