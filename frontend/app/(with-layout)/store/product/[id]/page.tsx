import { GET } from "./api/route";
import { products as mockedProducts } from "@/constants";
import Breadcrumbs from "@/components/Breadcrums/page";
import styles from "./page.module.css";

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
        <div>
          Product Id {params.id}
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{formattedPrice}</p>
        </div>
        <div className="container-fluid">
          <section className="d-flex py-3" id="plpContainer">
            <div className="container mb-4 d-block align-self-center">
              <div className="servicios bg-white">
                <Breadcrumbs name={product.name} />
                <div className="row servicio-fila">
                  <div className="col-lg-5 d-flex icono-wrap">
                    <div className="align-self-center text-center mx-auto p-5">
                      <img
                        src={product.img}
                        className=" img-absolute img-absolute-centered"
                        alt={product.name}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7 d-flex">
                    <div className="row align-self-center ">
                      <h2>{product.name}</h2>
                      <div className="price-container mb-4">
                        <div className="mb-3">
                          <span className="d-inline-block">
                            <div className="" id="price_display">
                              <h3>{formattedPrice}</h3>
                            </div>
                          </span>
                        </div>
                      </div>
                      <form id="product_form" method="post" action="/comprar/">
                        <input
                          type="hidden"
                          name="add_to_cart"
                          value="176455650"
                        />
                        <div
                          className="text-accent font-weight-bold mb-4"
                          style={{ display: "none" }}
                        >
                          ¡No te lo pierdas, es el último!
                        </div>
                        <div className="form-row mb-2">
                          <div className="col-4">
                            <div className="form-group  mb-2">
                              <div className=" m-0 align-items-center">
                                <div className="form-control-container col">
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-8">
                            <input
                              type="submit"
                              className={`${styles.btn}`}
                              value="Agregar al carrito"
                            />
                            <div
                              className={`${styles.btn} disabled`}
                              style={{ display: "none" }}
                            >
                              <div className="d-inline-block">
                                <span>Agregar al carrito</span>
                                <span>¡Listo!</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mb-2 mt-1">
                            <div
                              className=" font-small "
                              style={{ display: "none" }}
                            >
                              <span>
                                Ya agregaste este producto.
                                <a
                                  href="#"
                                  className={`${styles.btn} float-right ml-1`}
                                >
                                  Ver carrito
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>

                      <div
                        id="product-description"
                        className="mt-4 pt-3 "
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="user-content mb-4">
            <h5 className="mb-4 ">Descripción</h5>
            <p className="mx-4 mt-5 mb-2 fs-5">{product.description}</p>
          </div>
        </section>

        <div></div>
      </main>
    </>
  );
};

export default Product;
