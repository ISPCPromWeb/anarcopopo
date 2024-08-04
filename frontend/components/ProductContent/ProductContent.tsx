import { useCartContext } from "@/context";
import { Column } from "../Column";
import styles from "./ProductContent.module.css";
import { formattedPrice } from "@/utils";
import { useEffect } from "react";

export const ProductContent = (props: any) => {
  const {
    content: { name, price },
  } = props;
  const { cart, setCart } = useCartContext();

  const handleAddProduct = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target.closest("form"));
    const quantity = Number(formData.get("quantity"));
    const currentCart = cart;
    const currentProduct = {
      name,
      price,
      quantity,
    };
    const newCart = currentCart.push(currentProduct);
    setCart(newCart);
  };

  useEffect(() => {
    console.log(cart);
  }, []);

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
          <form id="product_form">
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
            <button
              className={`${styles.btn} btn`}
              onClick={(e) => handleAddProduct(e)}
            >
              Agregar al carrito
            </button>
          </form>
        </div>
      </Column>
    </>
  );
};
