
# Proyecto Next.js con Mercado Pago Checkout Pro

Este proyecto es una integración simple de **Mercado Pago Checkout Pro** con **Next.js**. Pasos necesarios para configurar y levantar el proyecto.

## Requisitos

- **Node.js** v14 o superior
- **Next.js** (ya incluido en el proyecto)
- Cuenta de **Mercado Pago** con credenciales de prueba y producción

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/DylanNavarro97/mp-checkout-int.git
   cd mp-checkout-int
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto para definir las credenciales de Mercado Pago:

   ```plaintext
   ACCESS_TOKEN_MP=<TU_ACCESS_TOKEN>
   NEXT_PUBLIC_PUBLIC_KEY_MP=<TU_PUBLIC_KEY>
   ```

   - Puedes obtener el `ACCESS_TOKEN` y `PUBLIC_KEY`desde el [panel de desarrollador de Mercado Pago](https://www.mercadopago.com.ar/developers/panel).

## Scripts

- **Desarrollar:** Para correr el proyecto en modo desarrollo, ejecuta:

  ```bash
  npm run dev
  ```

- **Producción:** Para compilar y levantar el proyecto en producción, usa:

  ```bash
  npm run build
  npm start
  ```

## Uso

1. Ingresa a `http://localhost:3000` en tu navegador para acceder al proyecto.
2. Al hacer clic en "Pagar con Mercado Pago", serás redirigido a Mercado Pago Checkout Pro para completar el pago.

---
