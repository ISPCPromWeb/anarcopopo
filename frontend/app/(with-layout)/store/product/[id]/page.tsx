import { GET } from "./api/route";
import { products as mockedProducts } from "@/constants";
import Breadcrumbs from "@/components/Breadcrums/page";
import styles from "./page.module.css";
import { Columns } from "@/components/Columns";
import { ServiceImage } from "@/components/ServiceImage";
import { Column } from "@/components/Column";

const ProductContent = (props) => {
  const {
    content: { name, price },
  } = props;
  return (
    <Column size={7}>
      <div className="offset-lg-5">
        <h2>{name}</h2>
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
          <input
            type="number"
            className=" form-control"
            autoCorrect="off"
            autoCapitalize="off"
            pattern="\d*"
            name="quantity"
            defaultValue={1}
            min="1"
            aria-label="Cambiar cantidad"
          />
          <button type="submit" className={`${styles.btn}`}>
            Agregar al carrito
          </button>
        </form>
      </div>
    </Column>
  );
};

const Product = async ({ params }: { params: { id: string } }) => {
  const data = await GET(params.id);
  const [product] = mockedProducts.filter(
    (product) => product.id === Number(params.id)
  );
  console.log(data);
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(product.price);
  return (
    <>
      <main>
        <div className="container-fluid">
          <section className="d-flex py-3" id="plpContainer">
            <div className="container mb-4 d-block align-self-center">
              <Breadcrumbs name={product.name} />

              <Columns color="white">
                <ServiceImage image={product.img} />
                <ProductContent
                  content={{ name: product.name, price: formattedPrice }}
                />
              </Columns>
            </div>
          </section>
        </div>
        <section className="container">
          <Columns color="white">
            <Column size={12}>
              <div className="user-content mb-4">
                <h5 className="mb-4 ">Descripción</h5>
                <p className="mx-4 mt-5 mb-2 fs-5">{product.description}</p>
              </div>
            </Column>
          </Columns>
        </section>
      </main>
    </>
  );
};

export default Product;
