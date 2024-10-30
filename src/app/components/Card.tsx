"use client"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';

function Card() {
    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago('YOUR_PUBLIC_KEY', {
        locale: "es-AR",
    });


    const createPreference = async () => {
        try {
            const response = await fetch("http://localhost:3000/create_preference", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titulo: 'objeto 1', precio: '$100' })
            });
            return response;
            console.log(response);
            // Obtener id de la respuesta y lo retorno
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
        
        return (
            <div className="p-4 flex flex-col items-center max-w-sm outline-black outline-double rounded-sm bg-white">
                <div className="py-2">
                    <img src="/images/mplogo.png" alt="Imagen mercado pago" className="w-40" />
                </div>



                <div className="flex flex-col gap-3 text-center">
                    <h2>Comprá una festejo aleatorio</h2>
                    <p>$100</p>
                    <button onClick={handleBuy} className="bg-blue-500 text-white rounded-sm p-1 font-bold">Comprar</button>
                    {preferenceId && 
                    <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                }
                    
                </div>


            </div>
        )
    }

    export default Card
