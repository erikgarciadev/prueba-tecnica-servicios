import React, { ReactNode } from "react";
import styles from "./TypesServices.module.css";

export default function Tab({
  children,
  active = false,
  onClick = () => {},
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`${styles.tab} ${active && styles.active}`}
    >
      {children}
    </div>
  );
}
