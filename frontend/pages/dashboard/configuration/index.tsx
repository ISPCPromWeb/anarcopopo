import Link from "next/link";
import styles from "./index.module.css";
import { petsApi, productsApi, vaccinesApi } from "@/api";
import Image from "next/image";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

import { useRouter } from "next/navigation";

export const getServerSideProps = async () => {
  const rawVaccineTypes = await vaccinesApi.getTypes();
  const petTypes = await petsApi.getTypes();
  const productTypes = await productsApi.getTypes();

  const vaccineTypes = rawVaccineTypes.map((vaccine: any) => {
    const typeName =
      petTypes.find((type: any) => type.id === vaccine.pet_type)?.name ||
      "Unknown";
    return { ...vaccine, pet_type: typeName };
  });
  return {
    props: {
      vaccineTypes,
      petTypes,
      productTypes,
    },
  };
};

const Configuration = (props: any) => {
  const { vaccineTypes, petTypes, productTypes } = props;

  const router = useRouter();
  const handleDeleteVaccineType = async (id: number) => {
    try {
      await vaccinesApi.deleteType(id);
      router.refresh();
    } catch (error) {
      console.error("Vaccine Type deletion failed", error);
    }
  };
  const handleDeletePetType = async (id: number) => {
    try {
      await petsApi.deleteType(id);
      router.refresh();
    } catch (error) {
      console.error("Pet Type deletion failed", error);
    }
  };
  const handleDeleteProductType = async (id: number) => {
    try {
      await productsApi.deleteType(id);
      router.refresh();
    } catch (error) {
      console.error("Product Type deletion failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <h3>Vacunas</h3>
        <div className="w-100 my-4">
          <Link href={`/dashboard/configuration/vaccineTypes/add`}>
            <ButtonSmall name="Agregar Tipo de Vacuna" type="button" />
          </Link>
        </div>
        {vaccineTypes.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo de Mascota</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {vaccineTypes.map((vaccineType: any, index: number) => (
                <tr key={index}>
                  <td>{vaccineType.name}</td>
                  <td>{vaccineType.pet_type}</td>

                  <td className="d-flex gap-2 pe-4 justify-content-end">
                    <Link
                      href={`/dashboard/configuration/vaccineTypes/edit/${vaccineType.id}`}
                    >
                      <ButtonSmall name="Editar" type="button" />
                    </Link>
                    <ButtonSmall
                      callback={() => handleDeleteVaccineType(vaccineType.id)}
                      type={`button`}
                      name={`Borrar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes vacunas en este momento</h3>
          </div>
        )}
      </div>
      <hr></hr>
      <div className={styles.clientsList}>
        <h3>Tipos de Mascota</h3>
        <div className="w-100 my-4">
          <Link href={`/dashboard/configuration/petTypes/add`}>
            <ButtonSmall name="Agregar Tipo de Mascota" type="button" />
          </Link>
        </div>
        {petTypes.length !== 0 ? (
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {petTypes.map((petType: any, index: number) => (
                <tr key={index}>
                  <td>{petType.name}</td>

                  <td className="d-flex gap-2 pe-4 justify-content-end">
                    <Link
                      href={`/dashboard/configuration/petTypes/edit/${petType.id}`}
                    >
                      <ButtonSmall name="Editar" type="button" />
                    </Link>
                    <ButtonSmall
                      callback={() => handleDeletePetType(petType.id)}
                      type={`button`}
                      name={`Borrar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes tipos de mascotas en este momento</h3>
          </div>
        )}
      </div>
      <hr></hr>
      <div className={styles.clientsList}>
        <h3>Tipos de Productos</h3>
        <div className="w-100 my-4">
          <Link href={`/dashboard/configuration/productTypes/add`}>
            <ButtonSmall name="Agregar Tipo de Producto" type="button" />
          </Link>
        </div>
        {productTypes.length !== 0 ? (
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productTypes.map((productType: any, index: number) => (
                <tr key={index}>
                  <td>{productType.name}</td>

                  <td className="d-flex gap-2 pe-4 justify-content-end">
                    <Link
                      href={`/dashboard/configuration/productTypes/edit/${productType.id}`}
                    >
                      <ButtonSmall name="Editar" type="button" />
                    </Link>
                    <ButtonSmall
                      callback={() => handleDeleteProductType(productType.id)}
                      type={`button`}
                      name={`Borrar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes tipos de productos en este momento</h3>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Configuration;
