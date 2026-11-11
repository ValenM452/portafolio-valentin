---
title: Nova
summary: Asistente de voz con una figura humanoide de partículas que responde en voz alta, sigue al usuario con la cámara y hace tareas en la computadora.
year: 2026
category: IA · Experimento
stack: [Node.js, Claude API, Three.js, Web Speech API, ElevenLabs]
status: privado
featured: false
client: false
order: 6
color: "#8b7cf6"
cover: "/proyectos/nova.jpg"
---

## La idea

Explorar cómo se siente hablar con un asistente que tiene presencia visual: una figura hecha de partículas que se arma sola, mira a quien le habla y responde con voz.

## Qué hace

- Escucha por micrófono y responde en voz alta.
- Sigue con la mirada al usuario usando la cámara.
- Ejecuta tareas en la computadora mediante herramientas propias.

## Cómo está hecho

Servidor en Node.js que conecta con la API de Claude, interfaz en el navegador con la figura de partículas en Three.js, reconocimiento y síntesis de voz con ElevenLabs.
