// import { productsApi } from "@/api/products";

import ServiceSection from "../ServiceSection/page";
import styles from "./page.module.css";

const ServicesSection = async () => {
  return (
    <section className="d-flex py-3 " id="servicios">
      <div className="container mb-4 d-block align-self-center">
        <ServiceSection />
      </div>
    </section>
  );
};

export default ServicesSection;
