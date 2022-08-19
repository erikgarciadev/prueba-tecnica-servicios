import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import styles from "../Services.module.css";

export default function FormService() {
  return (
    <div className={styles.wrapper__form}>
      <form className={styles.wrapper__card}>
        <div className={styles.card__top}>
          <h3>Servicio</h3>
          <div className={styles.form__label}>
            <label>Nombre</label>
            <Input autoFocus placeholder="Ingresar nombre" />
          </div>
          <div className={styles.form__label}>
            <label>Descripcion</label>
            <Input placeholder="Ingresar nombre" />
          </div>
          <div className={styles.form__label}>
            <label>Tipo de Servicio</label>
            <Select placeholder="Seleccionar Tipo de Servicio">
              <option disabled>Seleccionar Tipo de Servicio</option>
              <option>Autos</option>
              <option>Salud</option>
              <option>Hogar</option>
            </Select>
          </div>
        </div>
        <div className={styles.card__bottom}>
          <Button type="submit" color="green">
            Agregar
          </Button>
          <Button color="red">Cancelar</Button>
        </div>
      </form>
    </div>
  );
}
