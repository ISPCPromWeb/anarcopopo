import Image from "next/image";
import styles from "./page.module.css";
import { productsApi, petsApi } from "@/api";

const Dashboard = async () => {
  const products = await productsApi.getAll;
  const pets = await petsApi.getAll;
  return (
    <>
      <h1>Panel de control</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th className="d-none d-md-table-cell" scope="col">
              Description
            </th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: number) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="d-none d-md-table-cell">{product.description}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      {pets.map((pet: any, index: number) => (
        <p key={index}>{pet.name}</p>
      ))}
    </>
  );
};

export default Dashboard;
