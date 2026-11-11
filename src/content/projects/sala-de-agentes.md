---
title: Sala de Agentes
summary: Sala multiagente para un trader de NAS100. Seis agentes de IA calculan riesgo, revisan filtros, evalúan velas y anotan trades, con bitácora real, métricas y bot de Telegram.
year: 2026
category: IA · Sistema multiagente
stack: [JavaScript, Node.js, Vercel Functions, Vercel Blob, Telegram Bot API]
status: privado
featured: true
order: 2
color: "#8b5cf6"
cover: "/proyectos/sala-de-agentes.jpg"
---

## El desafío

Un trader que opera la apertura de Nueva York en NAS100 tenía su estrategia repartida en documentos, capturas y notas sueltas. Necesitaba aplicar sus reglas siempre igual y llevar un registro serio de cada operación.

## Qué construí

- **Sala de agentes**: los seis agentes en sus puestos, con panel principal, feed de mensajes entre ellos, gráfico con zonas y la bitácora real.
- **Chat con cada agente**: calculan el riesgo, evalúan velas, revisan los filtros del día, convierten zonas entre brokers, anotan trades y llevan el registro de las velas que funcionan.
- **Estrategia editable**: horario, riesgo, escalones de lote y filtros se cambian desde la web, con historial y restauración. Los agentes y el bot usan siempre las reglas guardadas.
- **Bot de Telegram** con resumen, trades, errores y reglas, más un resumen automático antes de la apertura.
- **Acceso privado** con contraseña cifrada y sesión firmada.

## Cómo está hecho

Frontend en JavaScript, funciones serverless en Vercel, almacenamiento privado en Vercel Blob y bot de Telegram por webhook. Las reglas de la estrategia viven en un único módulo compartido por la página y el bot.
