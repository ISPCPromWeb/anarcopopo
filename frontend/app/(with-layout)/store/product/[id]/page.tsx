import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import { GET } from "./api/route";
import { products as mockedProducts } from "@/constants";

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
    <main>
      <div>
        Product Id {params.id}
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{formattedPrice}</p>
      </div>
      <div className="container-fluid">
        <div className="col-md-10 offset-md-1 px-0">
          <div className="row section-single-product ">
            <div className="col-md-7 pr-0 pr-md-3 overflow-none">
              <img
                src={product.img}
                className=" img-absolute img-absolute-centered"
                alt={product.name}
              />
            </div>

            <div className="col pt-1 pt-md-0">
              <section className="page-header pt-2 mb-3  ">
                <div className="breadcrumbs ">
                  <a className="crumb" href="/" title="My Vet">
                    Inicio
                  </a>
                  <span className="separator">/</span>
                  <a className="crumb" href="/store" title="Tienda">
                    Tienda
                  </a>
                  <span className="separator">/</span>
                  <span
                    className="crumb"
                    title={product.name}
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    {product.name}
                  </span>
                </div>
                <h2 className="js-product-name h1-medium ">{product.name}</h2>
                <div className="price-container mb-4">
                  <div className="mb-3">
                    <span className="d-inline-block">
                      <div className="js-price-display" id="price_display">
                        <h3>{formattedPrice}</h3>
                      </div>
                    </span>
                  </div>
                </div>
                <form
                  id="product_form"
                  className="js-product-form"
                  method="post"
                  action="/comprar/"
                >
                  <input type="hidden" name="add_to_cart" value="176455650" />
                  <div
                    className="text-accent font-weight-bold mb-4"
                    style={{ display: "none" }}
                  >
                    ¡No te lo pierdas, es el último!
                  </div>
                  <div className="form-row mb-2">
                    <div className="col-4">
                      <div className="form-group js-quantity form-quantity form-quantity-product mb-2">
                        <div
                          className="form-row m-0 align-items-center"
                          data-component="product.quantity"
                        >
                          <span
                            className="js-quantity-down form-quantity-icon btn"
                            data-component="product.quantity.minus"
                          >
                            <svg
                              className="icon-inline icon-w-12 icon-xs"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M486.4,269.27H25.6v-25.6H486.4Z"></path>
                            </svg>
                          </span>
                          <div
                            className="form-control-container col"
                            data-component="product.adding-amount"
                          >
                            <input
                              type="number"
                              className=" form-control js-quantity-input form-control-inline"
                              autoCorrect="off"
                              autoCapitalize="off"
                              pattern="\d*"
                              name="quantity"
                              defaultValue={1}
                              min="1"
                              aria-label="Cambiar cantidad"
                              data-component="adding-amount.value"
                            />
                          </div>
                          <span
                            className="js-quantity-up form-quantity-icon btn"
                            data-component="product.quantity.plus"
                          >
                            <svg
                              className="icon-inline icon-w-12 icon-xs"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-8">
                      <input
                        type="submit"
                        className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big btn-block cart"
                        value="Agregar al carrito"
                        data-store="product-buy-button"
                        data-component="product.add-to-cart"
                      />
                      <div
                        className="js-addtocart js-addtocart-placeholder btn btn-primary  btn-block btn-transition btn-big disabled"
                        style={{ display: "none" }}
                      >
                        <div className="d-inline-block">
                          <span className="js-addtocart-text">
                            Agregar al carrito
                          </span>
                          <span className="js-addtocart-success transition-container">
                            ¡Listo!
                          </span>
                          <div className="js-addtocart-adding transition-container transition-icon"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-2 mt-1">
                      <div
                        className="js-added-to-cart-product-message font-small "
                        style={{ display: "none" }}
                      >
                        <svg
                          className="icon-inline icon-lg svg-icon-text mr-2 d-table float-left"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M174.61,370.49,451.75,93.35l18.1,18.1L174.32,407,42,270.53l18.38-17.82Z"></path>
                        </svg>
                        <span>
                          Ya agregaste este producto.
                          <a
                            href="#"
                            className="js-modal-open js-open-cart js-fullscreen-modal-open btn-link float-right ml-1"
                            data-toggle="#modal-cart"
                            data-modal-url="modal-fullscreen-cart"
                          >
                            Ver carrito
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  id="installments-modal"
                  className="js-modal js-fullscreen-modal  modal modal-bottom-md modal-overflow-none modal-flex-column modal-right modal-centered-md modal--md transition-slide modal-centered transition-soft "
                  style={{ display: "none" }}
                >
                  <div className="modal-footer text-right d-md-block ">
                    <div className="text-right">
                      <span className="js-modal-close js-fullscreen-modal-close btn-link pull-right">
                        Volver al producto
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="js-modal-overlay modal-overlay "
                  data-modal-id="#installments-modal"
                  style={{ display: "none" }}
                ></div>
                <div
                  id="product-description"
                  className="mt-4 pt-3 "
                  data-store="product-description-176455650"
                ></div>
              </section>
            </div>

            <div className="user-content mb-4">
              <h5 className="mb-4 ">Descripción</h5>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>{" "}
    </main>
  );
};

export default Product;
