import React, { useEffect } from "react";
import TypeService from "../../services/typeService";
import FormService from "./components/FormService";
import ListServices from "./components/ListServices";
import TypesServices from "./components/TypesServices";
import styles from './Services.module.css'

export default function Services() {
  useEffect(() => {
    TypeService.get().then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1 >Servicios</h1>
      <TypesServices />
      <div className="container" style={{ display: "flex", gap: "1em", padding:'2em 1em' }}>
        <ListServices />
        <FormService />
      </div>
    </div>
  );
}
