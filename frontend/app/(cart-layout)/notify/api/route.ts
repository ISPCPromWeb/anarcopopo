import mercadopago from "mercadopago";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

mercadopago.configure({
  access_token: process.env.MEPA_TOKEN || "",
});

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const topic = searchParams.get("topic") || searchParams.get("type");

  console.log({ topic });
  try {
    if (topic === "payment") {
      const paymentId = searchParams.get("id") || searchParams.get("data.id");
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log({ payment, paymentStatus });

      redirect("/notify");
      /* return new Response(JSON.stringify({ payment, paymentStatus }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }); */
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
  }
}
