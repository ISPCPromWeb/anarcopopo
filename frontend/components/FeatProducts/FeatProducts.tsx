import styles from "./FeatProducts.module.css";
// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";
import { formattedPrice } from "@/utils";
import { ProductCard } from "@/components/ProductCard";

export const FeatProducts = async () => {
  // const products = await productsApi.getAll;
  const products = mockedProducts;
  return (
    <section className={styles.popularProducts}>
      <h3 className="fw-bold mb-4">Productos Destacados</h3>
      <div className={`${styles.cardsContainer} mb-4`}>
        {products.map((product: any, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div
        className={`${styles.paginationvinc} pagination justify-content-end`}
      >
        <a className={`${styles.vinculos}`} href={"/store"}>
          Ver todos los productos
        </a>
      </div>
    </section>
  );
};
