import React, { ReactNode } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  color = "blue",
  outline = true,
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  color?: "blue" | "red" | "green";
  outline?: boolean;
}) {
  return (
    <button
      className={`${styles.button} ${outline && styles.outline} ${
        styles[color]
      }`}
      type={type}
    >
      {children}
    </button>
  );
}
