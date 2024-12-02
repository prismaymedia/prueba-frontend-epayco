import React from "react";
import styles from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loader} />
    </div>
  );
};
