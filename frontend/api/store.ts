/* import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { redirect } from "next/navigation";

mercadopago.configure({
  access_token: process.env.MEPA_TOKEN || "",
});

const URL = "https://myvet-three.vercel.app/";

const getUrl = async () => {
  // POST
  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: "prueba",
          unit_price: 10,
          quantity: 1,
        },
      ],
      auto_return: "approved",
      back_urls: {
        success: `${URL}/notify/`,
        failure: `${URL}/cart/`,
      },
      notification_url: `${URL}/notify/api/`,
    };

    const response = await mercadopago.preferences.create(preference);

    return response.body.init_point;

    return new Response(JSON.stringify({ url:  }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
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
};

const redirectToSummary = async (req: any) => {
  // GET
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
};

export const storeApi = {
  getUrl: getUrl,
  redirectToSummary: redirectToSummary,
};
 */
