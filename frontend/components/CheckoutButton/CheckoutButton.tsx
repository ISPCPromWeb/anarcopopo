import React, { useState, useEffect } from "react";
import styles from "./CheckoutButton.module.css";

export const CheckoutButton = (props: any) => {
  const { product } = props;
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /* useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const response = await fetch("/cart/api", {
          method: "POST",
          body: product,
        });
        const { url } = await response.json();
        setUrl(url);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    generateLink();
  }, [product]); */

  return (
    <div>
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <>
          <a className={`${styles.btn} btn w-100`} href={url || ""}>
            Comprar ahora
          </a>
        </>
      )}
    </div>
  );
};
