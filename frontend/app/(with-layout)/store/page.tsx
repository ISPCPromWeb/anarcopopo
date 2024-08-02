// import { productsApi } from "@/api/products";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import styles from "./page.module.css";
import { products as mockedProducts } from "@/constants";
import Link from "next/link";
import { StoreHeader } from "@/components/StoreHeader";

const Store = async () => {
  // const products = await productsApi.getAll;
  const products = mockedProducts;

  return (
    <main id="main" className={styles.main}>
      <StoreHeader />
      <section className={styles.popularProducts}>
        <div className={styles.cardsContainer}>
          {products.map((product: any, index: number) => (
            <div className="card">
              <img src={product.img} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link href={`/store/product/${product.id}`}>{"Ver Más"}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Store;
