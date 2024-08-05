import mercadopago from "mercadopago";
import { productsApi } from "@/api";

export const getServerSideProps = async () => {
  const products = await productsApi.getAll();

  /* const searchParams = req.params;
  const topic = searchParams.topic || searchParams.type;

  console.log({ topic }); */
  /* try {
    if (topic === "payment") {
      const paymentId = searchParams.id || searchParams.data.id;
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log({ payment, paymentStatus });
    } else {
      return new Response(JSON.stringify({ message: "Invalid topic" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } */

  return {
    props: {
      products,
    },
  };
};

const Summary = () => {
  return (
    <div>
      <p>Compra exitosa</p>
    </div>
  );
};

export default Summary;
