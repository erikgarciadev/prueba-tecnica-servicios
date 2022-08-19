import React, { ChangeEventHandler, ReactNode } from "react";
import styles from './Select.module.css'

export default function Select({
  children,
  value,
  onChange,
  placeholder = "",
}: {
  children: ReactNode;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  placeholder?: string;
}) {
  return (
    <select className={styles.select} value={value} onChange={onChange} placeholder={placeholder}>
      {children}
    </select>
  );
}
