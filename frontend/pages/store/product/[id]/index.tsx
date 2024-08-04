import { products as mockedProducts } from "@/constants";
import { Breadcrumbs } from "@/components/Breadcrums/Breadcrumbs";
import styles from "./index.module.css";
import { Columns } from "@/components/Columns";
import { ServiceImage } from "@/components/ServiceImage";
import { Column } from "@/components/Column";
import { formattedPrice } from "@/utils";
import { FeatProducts } from "@/components/FeatProducts";
import { ProductContent } from "@/components/ProductContent";
import { productsApi } from "@/api";

const Product = ({ params }: { params: { id: string } }) => {
  /* const [product] = await productsApi.getOne(Number(params.id)); */

  return (
    <>
      <main>
        <div className="container-fluid">
          <section className="d-flex py-3" id="plpContainer">
            <div className="container mb-4 d-block align-self-center">
              <div className="justify-content-end">
                {/* <Breadcrumbs name={product.name} /> */}
              </div>

              <Columns color="white" borderRadius="3">
                {/* <ServiceImage image={product.img} />
                <ProductContent
                  content={{
                    name: product.name,
                    price: product.price,
                  }}
                /> */}
              </Columns>
            </div>
          </section>
        </div>
        <section className="container">
          <Columns color="white" borderRadius="3">
            <Column size={12}>
              <div className="user-content mb-4">
                <h2 className={`${styles.h2Description} ms-4 mb-4 `}>
                  Descripción
                </h2>
                {/* <p className={`${styles.parag} mx-4 mt-5 mb-2`}>
                  {product.description}
                </p> */}
              </div>
            </Column>
          </Columns>
        </section>
        <FeatProducts />
      </main>
    </>
  );
};

export default Product;
