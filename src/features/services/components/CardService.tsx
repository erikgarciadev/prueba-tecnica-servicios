import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import Button from "../../../components/Button";
import { IService } from "../../../interfaces/service.interface";
import styles from "../Services.module.css";
import { deleteService, setSelectedService } from "../servicesSlice";

export default function CardService({ service }: { service: IService }) {
  const dispatch = useAppDispatch();
  const handleDelete = (idService: number | string) => {
    dispatch(deleteService(idService));
  };
  const handleEdit = (idService: number | string) => {
    dispatch(setSelectedService(idService));
  };
  return (
    <div className={styles.wrapper__card}>
      <div className={styles.card__top}>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
      </div>
      <div className={styles.card__bottom}>
        <Button outline={false} onClick={() => handleEdit(service.id!)}>
          Editar
        </Button>
        <Button outline={false} onClick={() => handleDelete(service.id!)}>
          Eliminar
        </Button>
      </div>
    </div>
  );
}
