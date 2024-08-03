import { GET } from "./api/route";
import { products as mockedProducts } from "@/constants";
import { Breadcrumbs } from "@/components/Breadcrums/Breadcrumbs";
import styles from "./page.module.css";
import { Columns } from "@/components/Columns";
import { ServiceImage } from "@/components/ServiceImage";
import { Column } from "@/components/Column";
import { formattedPrice } from "@/utils";
import { FeatProducts } from "@/components/FeatProducts";

const ProductContent = (props: any) => {
  const {
    content: { name, price },
  } = props;
  return (
    <>
      <Column size={7}>
        <div className="offset-lg-5">
          <h2 className={`${styles.h2Hero}`}>{name}</h2>
          <div className="price-container mb-4">
            <div className="mb-3">
              <span className="d-inline-block">
                <div className="" id="price_display">
                  <h3>{price}</h3>
                </div>
              </span>
            </div>
          </div>
          <form id="product_form" method="post" action="/comprar/">
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
            <button type="submit" className={`${styles.btn} btn`}>
              Agregar al carrito
            </button>
          </form>
        </div>
      </Column>
    </>
  );
};

const Product = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const data = await GET(params.id);
  const [product] = mockedProducts.filter(
    (product) => product.id === Number(params.id)
  );
  console.log(data);

  return (
    <>
      <main>
        <div className="container-fluid">
          <section className="d-flex py-3" id="plpContainer">
            <div className="container mb-4 d-block align-self-center">
              <div className="justify-content-end">
                <Breadcrumbs name={product.name} />
              </div>

              <Columns color="white" borderRadius="3">
                <ServiceImage image={product.img} />
                <ProductContent
                  content={{
                    name: product.name,
                    price: formattedPrice(product.price),
                  }}
                />
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
                <p className={`${styles.parag} mx-4 mt-5 mb-2`}>
                  {product.description}
                </p>
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
