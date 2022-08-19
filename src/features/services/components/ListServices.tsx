import React from "react";
import CardService from "./CardService";
import styles from "../Services.module.css";
import { useAppSelector } from "../../../app/hooks";
import { getFilteredServices } from "../servicesSlice";

export default function ListServices() {
  const services = useAppSelector(getFilteredServices);
  return (
    <div className={styles.wrapper__list__services}>
      <div className={styles.wrapper__cards}>
        {services.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
