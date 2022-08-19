import React from "react";
import { useAppSelector } from "../../../app/hooks";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import styles from "../Services.module.css";
import useFormService from "../hooks/useFormService";

export default function FormService() {
  const selectedService = useAppSelector(
    (state) => state.services.selectedService
  );
  const { handleChange, handleResetForm, handleSubmit, form, errors } =
    useFormService(selectedService);

  const typesService = useAppSelector((state) => state.services.typesService);

  return (
    <div className={styles.wrapper__form}>
      <form className={styles.wrapper__card} onSubmit={handleSubmit}>
        <div className={styles.card__top}>
          <h3>Servicio</h3>
          <div className={styles.form__label}>
            <label>Nombre</label>
            <Input
              value={form.name}
              onChange={handleChange}
              autoFocus
              name="name"
              placeholder="Ingresar nombre"
            />
            <label>{errors.name}</label>
          </div>
          <div className={styles.form__label}>
            <label>Descripcion</label>
            <Input
              value={form.description}
              onChange={handleChange}
              name="description"
              placeholder="Ingresar descripcion"
            />
            <label>{errors.description}</label>
          </div>
          <div className={styles.form__label}>
            <label>Tipo de Servicio</label>
            <Select
              name="idTypeService"
              onChange={handleChange}
              value={form.idTypeService ?? 0}
              placeholder="Seleccionar Tipo de Servicio"
            >
              <option>Seleccionar Tipo de Servicio</option>
              {typesService.map((typeService) => (
                <option key={typeService.id} value={typeService.id}>
                  {typeService.name}
                </option>
              ))}
            </Select>
            <label>{errors.idTypeService}</label>
          </div>
        </div>
        <div className={styles.card__bottom}>
          <Button type="submit" color="green">
            {form.id ? "Actualizar" : "Agregar"}
          </Button>
          {form.id && (
            <Button onClick={handleResetForm} color="red">
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
