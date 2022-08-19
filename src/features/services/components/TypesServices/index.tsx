import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setSelectedTypeService } from "../../servicesSlice";
import Tab from "./Tab";
import styles from "./TypesServices.module.css";

export default function TypesServices() {
  const dispatch = useAppDispatch();
  const typesService = useAppSelector((state) => state.services.typesService);
  const selectedTypeService = useAppSelector(
    (state) => state.services.selectedTypeService
  );

  const handleClickTab = (idTypeService: number) => {
    dispatch(setSelectedTypeService(idTypeService));
  };
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.wrapper__tabs}`}>
        <Tab
          active={selectedTypeService === 0}
          onClick={() => handleClickTab(0)}
        >
          Todos
        </Tab>
        {typesService.map((typeService) => (
          <Tab
            key={typeService.id}
            active={selectedTypeService === typeService.id}
            onClick={() => handleClickTab(typeService.id)}
          >
            {typeService.name}
          </Tab>
        ))}
      </div>
    </div>
  );
}
