---
title: ByEmilia · Panel de gestión
summary: Panel privado de la tienda ByEmilia para manejar el negocio desde el celular, con ventas, visitas, pedidos, piezas a pedido y carga de productos.
year: 2026
category: Sistema de gestión
stack: [Next.js 16, React 19, Tailwind 4, Drizzle ORM, PostgreSQL]
status: privado
featured: false
order: 4.5
color: "#d98fb0"
cover: "/proyectos/byemilia-panel.jpg"
---

## El desafío

Una tienda online sirve de poco si la dueña no puede manejarla sola. Emilia necesitaba ver cuánto vende, qué pedidos le entran y cargar sus prendas sin depender de nadie, todo desde el celular.

## Qué construí

- **Estadísticas** de ventas y de la página: facturado, pedidos, ticket promedio, visitantes, productos vistos, clics a WhatsApp y conversión, con filtro por período (hoy, 7, 30 y 90 días, 12 meses).
- **Gráfico de facturación por día** y estado de los pedidos: nuevos, confirmados, entregados y cancelados.
- **Pedidos** con el detalle de cada compra y respuesta directa por WhatsApp.
- **Piezas a pedido** y **arrepentimientos** en secciones propias, para cumplir con Defensa del Consumidor.
- **Productos**: alta, edición, ocultar y borrar, con fotos, categoría y precio.
- **Ajustes** del negocio: WhatsApp, Instagram y datos legales.

## Cómo está hecho

Next.js 16 con React 19 y Tailwind 4, la misma estética liquid glass de la tienda. Datos en PostgreSQL con Drizzle ORM y acceso con contraseña y sesión firmada. Es privado: solo entra la dueña.
