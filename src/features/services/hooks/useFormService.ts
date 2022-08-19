import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  addService,
  setSelectedService,
  updateService,
} from "../servicesSlice";
import { v4 as uuidv4 } from "uuid";
import { IService } from "../../../interfaces/service.interface";

export default function useFormService(selectedService: IService | null) {
  const [form, setForm] = useState<IService>({
    id: null,
    name: "",
    description: "",
    idTypeService: 0,
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    idTypeService: "",
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectedService !== null) {
      setForm({
        ...selectedService,
      });
    }
  }, [selectedService]);

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
    setErrors({
      ...errors,
      [ev.target.name]: "",
    });
  };

  const handleResetForm = () => {
    setForm({
      id: null,
      name: "",
      description: "",
      idTypeService: 0,
    });
    dispatch(setSelectedService(null));
  };

  const validForm = () => {
    let _errors: any = {};
    for (const [key, value] of Object.entries(form)) {
      if (key === "idTypeService") {
        if (Number(value) === 0) {
          _errors = {
            ..._errors,
            [key]: "Requerido",
          };
        }
      } else {
        if (value === "") {
          _errors = {
            ..._errors,
            [key]: "Requerido",
          };
        }
      }
    }
    setErrors({
      ..._errors,
    });
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validForm()) return;
    if (form.id) {
      dispatch(
        updateService({
          id: form.id,
          service: {
            ...form,
            id: form.id,
            idTypeService: Number(form.idTypeService),
          },
        })
      );
    } else {
      dispatch(
        addService({
          ...form,
          id: uuidv4(),
          idTypeService: Number(form.idTypeService),
        })
      );
    }
    handleResetForm();
  };
  return {
    handleChange,
    handleResetForm,
    handleSubmit,
    form,
    errors,
  };
}
