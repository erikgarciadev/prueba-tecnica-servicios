import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import TypeService from "../../services/typeService";
import FormService from "./components/FormService";
import ListServices from "./components/ListServices";
import TypesServices from "./components/TypesServices";
import styles from "./Services.module.css";
import { setTypesServices } from "./servicesSlice";

export default function Services() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTypesServices = async () => {
      try {
        const data: any = await TypeService.get();
        dispatch(setTypesServices(data));
      } catch (error) {
        throw error;
      }
    };
    getTypesServices();
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <h1>Servicios</h1>
      <TypesServices />
      <div
        className="container"
        style={{ display: "flex", gap: "1em", padding: "2em 1em" }}
      >
        <ListServices />
        <FormService />
      </div>
    </div>
  );
}
