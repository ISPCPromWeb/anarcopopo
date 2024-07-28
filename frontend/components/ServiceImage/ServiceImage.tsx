// import { productsApi } from "@/api/products";

import { Column } from "../Column";
import styles from "./ServiceImage.module.css";

export const ServiceImage = (props) => {
  const { image } = props;
  return (
    <Column size={5}>
      <div className="align-self-center text-center mx-auto p-5">
        <img
          src={image}
          className={`img-fluid ${styles.imgVetDuenos}`}
          alt=""
        />
      </div>
    </Column>
  );
};
