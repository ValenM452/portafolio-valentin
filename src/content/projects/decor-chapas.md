---
title: Decor Chapas
summary: Tienda online de decoración en chapa y hierro con catálogo de 144 piezas, carrito que cierra el pedido por WhatsApp y panel de ventas y stock.
year: 2026
category: E-commerce
stack: [React 19, Vite, Tailwind 4, Express 5, SQLite, Zod, Docker]
status: publicado
featured: true
order: 1
color: "#e8763a"
live: "https://decor-chapas.vercel.app"
---

## El desafío

Un comercio de Chilecito que vende piezas de decoración en chapa necesitaba vender fuera del local sin pagar comisiones de marketplace y sin perder el trato directo con el cliente.

## Qué construí

- **Landing** con fotos de ambientes que cambian al hacer scroll y piezas giratorias.
- **Catálogo** de 144 productos organizado por secciones.
- **Carrito y pedidos**: el servidor valida precios y stock, reserva las piezas y genera un número de pedido. El cliente termina la compra en WhatsApp con el detalle ya escrito.
- **Panel privado** con tablero de ventas para manejar pedidos y stock.
- Páginas legales con botón de arrepentimiento.

## Cómo está hecho

Monorepo con frontend en React + Vite + Tailwind y backend en Express + SQLite, validación con Zod y despliegue con Docker en VPS más Vercel.
