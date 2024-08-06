"use client";

import styles from "./Columns.module.css";

interface ColumnsProps {
  color: string;
  reversed?: boolean;
  children: React.ReactNode;
  borderRadius: string;
}

export const Columns = async (props: ColumnsProps) => {
  const { color, borderRadius, children, reversed } = props;
  return (
    <div
      className={`d-flex ${styles.servicioFila} ${
        styles.servicios
      } row bg-${color} rounded-${borderRadius} ${reversed && styles.reversed}`}
    >
      {children}
    </div>
  );
};
