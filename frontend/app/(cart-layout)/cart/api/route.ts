import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest } from "next/server";

mercadopago.configure({
  access_token: process.env.MEPA_TOKEN,
});

const URL = "http://localhost:3000/";

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

      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/notify/api/`,
    };

    const response = await mercadopago.preferences.create(preference);

    console.log("lalala", response.body.init_point);

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
