import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest } from "next/server";

mercadopago.configure({
  access_token: process.env.MEPA_TOKEN || "",
});

const URL = "https://myvet-three.vercel.app/";

export async function POST(req: NextRequest) {
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

    return new Response(JSON.stringify({ url: response.body.init_point }), {
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
}
