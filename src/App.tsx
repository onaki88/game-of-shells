import React from "react";
import AppSidebar from "./sections/Sidebar";
import AppHeader from "./sections/Header";
import AppFooter from "./sections/Footer";
import AppShells from "./sections/Shells";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <AppSidebar />
      <AppHeader />
      <AppShells />
      <AppFooter />
    </div>
  );
}

export default App;
