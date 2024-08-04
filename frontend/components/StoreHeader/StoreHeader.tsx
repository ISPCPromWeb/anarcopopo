import styles from "./StoreHeader.module.css";
import { Breadcrumbs } from "../Breadcrums";
import { Column } from "../Column";
import { Columns } from "../Columns";

export const StoreHeader = () => {
  return (
    <>
      <Columns color="white" borderRadius="0">
        <div className="container col-xxl-8 px-4 pb-4 pt-2">
          <div className="row">
            <Breadcrumbs />
            <h3>My Pet Tienda</h3>
            <p>Elegí los productos que tu mascota necesita</p>
          </div>
        </div>
      </Columns>

      {/* <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./assets/IsoDark.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
