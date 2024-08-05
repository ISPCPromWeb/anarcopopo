import { useCartContext } from "@/context";
import { Column } from "../Column";
import styles from "./ProductContent.module.css";
import { formattedPrice } from "@/utils";
import { useEffect } from "react";

export const ProductContent = (props: any) => {
  const {
    content: { id, name, price, img },
  } = props;
  const { cart, setCart } = useCartContext();

  const handleAddProductToCart = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const quantity = Number(formData.get("quantity"));
    const currentProduct = Object.assign(
      {},
      {
        id,
        name,
        price,
        quantity,
        img,
      }
    );

    if (typeof window !== "undefined") {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      let productExists = false;

      const newCart = currentCart.map((product: any) => {
        if (currentProduct.name === product.name) {
          productExists = true;
          return {
            ...product,
            quantity: product.quantity + currentProduct.quantity,
          };
        }
        return product;
      });

      if (!productExists) {
        newCart.push(currentProduct);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      const value = localStorage.getItem("cart");
      document.cookie = `cart=${value}; path=/;`;
      setCart(newCart);
    }
  };

  return (
    <>
      <Column size={7}>
        <div className="offset-lg-5">
          <h2 className={`${styles.h2Hero}`}>{name}</h2>
          <div className="price-container mb-4">
            <div className="mb-3">
              <span className="d-inline-block">
                <div className="" id="price_display">
                  <h3>{formattedPrice(price)}</h3>
                </div>
              </span>
            </div>
          </div>
          <form
            onSubmit={handleAddProductToCart}
            encType="multipart/form-data"
            id="product_form"
          >
            <label htmlFor="quantity">Cantidad</label>
            <input
              type="number"
              className=" form-control border-2 mb-5 w-25"
              autoCorrect="off"
              autoCapitalize="off"
              pattern="\d*"
              name="quantity"
              defaultValue={1}
              min="1"
              aria-label="Cambiar cantidad"
            />
            <button className={`${styles.btn} btn`} type="submit">
              Agregar al carrito
            </button>
          </form>
        </div>
      </Column>
    </>
  );
};
