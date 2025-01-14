import { Navbar } from "components/Navbar";
import styles from "./PaginaPadrao.module.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "components/Footer";

export function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
