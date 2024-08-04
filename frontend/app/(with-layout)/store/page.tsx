// import { productsApi } from "@/api/products";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import styles from "./page.module.css";
import { products as mockedProducts } from "@/constants";
import Link from "next/link";
import { StoreHeader } from "@/components/StoreHeader";
import { formattedPrice } from "@/utils";
import { StoreFilter } from "@/components/StoreFilter";
import { ProductCard } from "@/components/ProductCard";

const Store = async () => {
  // const products = await productsApi.getAll;
  const products = mockedProducts;

  return (
    <main id="main" className={styles.main}>
      <StoreHeader />
      <div className="col-12 h-100 d-block d-md-flex md-flex-row">
        <StoreFilter />
        <section className={`col-9`}>
          <div className={`${styles.cardsContainer} mb-4`}>
            {products.map((product: any, index: number) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Store;
