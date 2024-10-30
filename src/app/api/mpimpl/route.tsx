import { MercadoPagoConfig, Preference } from "mercadopago"
import { NextRequest, NextResponse } from "next/server"

const access_token = process.env.ACCESS_TOKEN_MP as string

const client = new MercadoPagoConfig({
    accessToken: access_token
})

const preference = new Preference(client)

export async function POST(req: NextRequest) {
    try {
        const { product_id, title, quantity, unit_price, currency_id } = await req.json()
        const result = await preference.create({
            body: {
                items: [
                    {
                        id: product_id,
                        title: title,
                        quantity: quantity,
                        unit_price: unit_price,
                        currency_id: currency_id
                    }
                ],
                back_urls: {
                    success: "/",
                    failure: "/",
                    pending: "/"
                },
                auto_return: "approved"
            }
        })
        return NextResponse.json({id: result.id})

    } catch (error) {
        console.log(error)
        NextResponse.json({error: 'Error al crear la preferencia'})
    }
}