"use client"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';

function Card() {
    const [preferenceId, setPreferenceId] = useState(null)
    const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY_MP as string

    initMercadoPago(public_key, {
        locale: "es-AR",
    });


    const createPreference = async () => {
        try {
            const response = await fetch("/api/mpimpl", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: "1",
                    title: "Una prueba de compra",
                    quantity: 1,
                    unit_price: 50,
                    currency_id: "ARS",
                })
            });
            const data = await response.json()
            return data.id
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id !== null) {
            setPreferenceId(id)
        }
    }

    useEffect(() => {
        handleBuy()
    }, [])

    return (
        <div className="p-4 flex flex-col items-center w-full max-w-sm outline-black outline-double rounded-sm bg-white">
            <div className="py-2">
                <img src="/images/mplogo.png" alt="Imagen mercado pago" className="w-40" />
            </div>

            <div className="flex flex-col gap-3 w-full text-center overflow-hidden">
                <h2>Comprá una festejo aleatorio</h2>
                <p>$100</p>
                {
                    preferenceId &&
                    <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                }
            </div>


        </div>
    )
}

export default Card
