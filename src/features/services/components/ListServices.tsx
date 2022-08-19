import React from "react";
import CardService from "./CardService";
import styles from "../Services.module.css";

export default function ListServices() {
  return (
    <div className={styles.wrapper__list__services}>
      <div className={styles.wrapper__cards}>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </div>
  );
}
