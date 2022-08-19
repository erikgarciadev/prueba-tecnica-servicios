import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

export default function Input({
  placeholder = "",
  onChange,
  value,
  autoFocus = false,
  name=''
}: {
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean
  name: string
}) {
  return <input name={name} autoFocus={autoFocus} className={styles.input} onChange={onChange} value={value} />;
}
