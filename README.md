# Viviam Chávez Nails · Propuesta de web

Landing page para **Viviam Chávez Nails**, estudio de uñas en Comas (Lima) especializado en uña natural. Construida con [Astro](https://astro.build) como sitio estático, igual que las otras propuestas. Diseño basado en la referencia NAILÉ (rosados suaves, botones negros, letras manuscritas) con el logo de Viviam, pensado para convertir visitas en reservas por WhatsApp.

## Cómo usarlo

```bash
npm install
npm run dev       # http://localhost:4334
npm run build     # genera el sitio estático en dist/
npm run preview
```

## Lo que encontramos en su Instagram (@viviamchavez.nails, octubre 2026)

- **Bio:** “Dual System • Rubber • Pedicure & Más”, “Uñas perfectas para ti 💅”.
- **Dirección:** Av. Micaela Bastidas N.° 750, Comas. **Horario:** lunes a domingo, 10 a. m. – 10 p. m.
- **WhatsApp:** 916 128 298. **Manicurista:** @viviam.chavez.
- **Técnicas en publicaciones:** builder gel, francesa con efecto espejo, diseños (puntos, francesa de color), extensiones, pedicure.
- **Enfoque:** cuidado de la uña natural. Según su propio post, ~90 % de clientas mantiene uña natural y ~10 % pide extensiones.
- **Historia:** en junio de 2026 cambió de nombre: Galivis Nails pasó a ser Viviam Chávez Nails.
- **Destacados:** “Ubicación” y “Promoción mes” (su contenido no se puede ver sin iniciar sesión).

## Decisiones de la propuesta

- **Diseño (versión actual, referencia NAILÉ):** barra rosada con la promo del mes, portada con foto a sangre que se funde con el rosado, frase manuscrita, botón "Reservar mi cita" y "Ver nuestro estudio" (abre su reel de cómo llegar), y cuatro íconos de confianza. Paleta: rosados `#F6E6E3` / `#EFD6D2` / `#E6BFBB`, negro `#141414` y el dorado del logo. Tipografías: Gilda Display, Jost y Caveat (manuscrita).
- Secciones: servicios en tarjetas con foto e ícono, "Más que un salón de uñas" con foto del estudio y cuatro motivos, galería de seis diseños con "Lo quiero", banda de promoción, frases con flechas, reserva (mapa + formulario a WhatsApp) y pie con contacto.
- **Reseñas:** la referencia muestra testimonios de clientas, pero no tenemos reseñas reales. Esa sección muestra frases de sus propias publicaciones (marcadas como tales). Cuando haya reseñas reales, se cambian en `FRASES`.
- Las frases manuscritas ("Uñas bonitas, tú más feliz", "Pequeños detalles, gran felicidad") son decorativas, igual que en la referencia.
- **Reservas, etapa 1 y 2:** todos los botones abren WhatsApp con un mensaje listo según el servicio. El formulario no guarda datos: arma el mensaje (nombre, servicio, día, horario y comentario) y lo envía por WhatsApp.
- **Se quitaron de la referencia** estilistas, membresías, premios, blog y gift cards: no existen hoy en el negocio.
- **Precios:** no están publicados, así que no se muestra precio: se consulta por WhatsApp.
- **Promoción del mes:** invita a consultar por WhatsApp hasta tener la promo vigente. Cuando la clienta la confirme, se cambia en `PROMO_MES` (barra superior y banda rosada).
- En móvil: barra fija abajo con “Agendar” y “WhatsApp”; en escritorio, botón flotante de WhatsApp.
- Fotos reales de su Instagram (640 px), recortadas sin textos superpuestos ni la marca anterior.

## Cómo editar

Todo el contenido está en `src/data/site.ts`:

- `NEGOCIO`: contacto, dirección y horario.
- `SERVICIOS`: agrega `precio: 'S/ 00'` a un servicio para mostrarlo en su tarjeta.
- `PROMO_MES`: título y detalle de la promo vigente; `activa: false` la oculta.
- `CONFIANZA`, `RAZONES`, `GALERIA` (el `nombre` de cada foto va en el mensaje de "Lo quiero") y `FRASES`.

## Pendiente de confirmar con la clienta

1. **Fotos en alta resolución** (las de Instagram son de 640 px) y fotos del estudio por dentro.
2. **Precios** de cada servicio o confirmar que se muestran “a consultar”.
3. **Promoción del mes** vigente, con condiciones y fechas.
4. Lista final de servicios (¿retiro, esmaltado tradicional, spa de pies?) y duración aproximada.
5. **Medios de pago** (Yape, Plin, efectivo, tarjeta).
6. **Logo en vector (SVG).** Hoy se usa el PNG con el fondo crema quitado.
7. **Libro de Reclamaciones virtual** (obligatorio en Perú si la web se usa como canal de venta).
8. Dominio real (cambiar `site` en `astro.config.mjs`).

## Siguientes fases sugeridas

- Reservas en línea con agenda real (Cal.com, Calendly o Booksy).
- Galería administrable (CMS) para subir trabajos sin tocar código.
- Paquetes especiales y campañas por fechas (Día de la Madre, Navidad, novias), solo cuando la clienta las defina.
