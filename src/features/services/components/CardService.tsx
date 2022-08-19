import React from "react";
import Button from "../../../components/Button";
import styles from "../Services.module.css";

export default function CardService() {
  return (
    <div className={styles.wrapper__card}>
      <div className={styles.card__top}>
        <h2>Electricidad</h2>
        <p>
          Lorem ipsum dadad da Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eaque nihil reiciendis quas expedita in perferendis
          reprehenderit ea repellendus, quam adipisci ullam fugiat nam incidunt
          consequuntur omnis, totam itaque aliquid impedit.
        </p>
      </div>
      <div className={styles.card__bottom}>
        <Button outline={false}>Editar</Button>
        <Button outline={false}>Eliminar</Button>
      </div>
    </div>
  );
}
