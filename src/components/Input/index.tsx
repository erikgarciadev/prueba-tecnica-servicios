import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

export default function Input({
  placeholder = "",
  onChange,
  value,
  autoFocus = false
}: {
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean
}) {
  return <input autoFocus={autoFocus} className={styles.input} onChange={onChange} value={value} />;
}
