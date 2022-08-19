import React, { ReactNode } from "react";
import styles from "./TypesServices.module.css";

export default function Tab({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <div className={`${styles.tab} ${active && styles.active}`}>{children}</div>
  );
}
