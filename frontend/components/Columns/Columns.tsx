// import { productsApi } from "@/api/products";

import styles from "./Columns.module.css";

interface ColumnsProps {
  color: string;
  reversed?: boolean;
  children: React.ReactNode;
}

export const Columns = async (props: ColumnsProps) => {
  const { color, children, reversed } = props;
  return (
    <div
      className={`${styles.servicioFila} row bg-${color} ${
        reversed && styles.reversed
      }`}
    >
      {children}
    </div>
  );
};
