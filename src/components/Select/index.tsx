import React, { ChangeEventHandler, ReactNode } from "react";
import styles from "./Select.module.css";

export default function Select({
  children,
  value,
  onChange,
  placeholder = "",
  name = "",
}: {
  children: ReactNode;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  placeholder?: string;
  name?: string;
}) {
  return (
    <select
      name={name}
      className={styles.select}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      {children}
    </select>
  );
}
