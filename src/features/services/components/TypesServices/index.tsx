import React from "react";
import Tab from "./Tab";
import styles from "./TypesServices.module.css";

export default function TypesServices() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.wrapper__tabs}`}>
        <Tab active={true}>Todos</Tab>
        <Tab>Autos</Tab>
        <Tab>Salud</Tab>
        <Tab>Hogar</Tab>
      </div>
    </div>
  );
}
