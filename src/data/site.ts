// Datos de Viviam Chávez Nails. Todo lo que aparece aquí está confirmado en su Instagram
// (@viviamchavez.nails, octubre 2026). No hay precios ni condiciones publicadas: se consultan
// por WhatsApp. Para cambiar textos, servicios o la promo del mes, edita solo este archivo.

export const NEGOCIO = {
  nombre: 'Viviam Chávez Nails',
  whatsapp: '51916128298',
  telefono: '916 128 298',
  instagram: 'https://www.instagram.com/viviamchavez.nails/',
  usuario: '@viviamchavez.nails',
  artista: 'https://www.instagram.com/viviam.chavez/',
  artistaUsuario: '@viviam.chavez',
  // Reel de su Instagram donde muestran cómo llegar al estudio
  videoEstudio: 'https://www.instagram.com/viviamchavez.nails/reel/DaDsou2KGVb/',
  direccion: 'Av. Micaela Bastidas N.° 750',
  distrito: 'Comas, Lima',
  mapa: 'Av. Micaela Bastidas 750, Comas, Lima, Perú',
  horario: 'Lunes a domingo, de 10:00 a. m. a 10:00 p. m.',
  horarioCorto: 'Lun a dom: 10 a. m. a 10 p. m.',
};

export const waLink = (mensaje: string) =>
  `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;

// Franja de confianza bajo la portada
export const CONFIANZA = [
  { icono: 'leaf', titulo: 'Uña natural', detalle: 'Nuestra especialidad' },
  { icono: 'clock', titulo: 'Todos los días', detalle: 'De 10 a. m. a 10 p. m.' },
  { icono: 'heart', titulo: 'Diseños a tu estilo', detalle: 'Trae tu referencia' },
  { icono: 'star', titulo: 'Reserva fácil', detalle: 'Por WhatsApp' },
];

export type Servicio = {
  id: string;
  nombre: string;
  detalle: string;
  imagen: string;
  icono: string;
  /** Precio confirmado por la clienta. Mientras no exista, no se muestra. */
  precio?: string;
};

// Técnicas que nombra su bio ("Dual System • Rubber • Pedicure & Más") y sus publicaciones.
export const SERVICIOS: Servicio[] = [
  { id: 'rubber', nombre: 'Rubber', detalle: 'Nivela y fortalece tu uña natural con un acabado liso.', imagen: '/assets/img/rubber-chocolate.webp', icono: 'drop' },
  { id: 'builder-gel', nombre: 'Builder Gel', detalle: 'Estructura y resistencia sin perder naturalidad.', imagen: '/assets/img/manicure-natural.webp', icono: 'hand' },
  { id: 'dual-system', nombre: 'Dual System', detalle: 'Uñas uniformes, resistentes y con forma perfecta.', imagen: '/assets/img/francesa-clasica.webp', icono: 'layers' },
  { id: 'extensiones', nombre: 'Extensiones', detalle: 'Más largo para tu día a día u ocasión especial.', imagen: '/assets/img/francesa-color.webp', icono: 'sparkle' },
  { id: 'disenos', nombre: 'Diseños', detalle: 'Francesa espejo, puntos, líneas y más, a mano.', imagen: '/assets/img/diseno-puntos.webp', icono: 'brush' },
  { id: 'pedicure', nombre: 'Pedicure', detalle: 'Pies cuidados, suaves y con acabado impecable.', imagen: '/assets/img/pedicure.webp', icono: 'foot' },
];

// "Más que un salón de uñas": solo lo que ella misma comunica en sus publicaciones
export const RAZONES = [
  { icono: 'leaf', titulo: 'Especialistas en uña natural', detalle: 'Cuidamos, fortalecemos y embellecemos tu uña.' },
  { icono: 'home', titulo: 'Un espacio pensado para ti', detalle: 'Un estudio creado para consentirte.' },
  { icono: 'brush', titulo: 'Diseños personalizados', detalle: 'Nos adaptamos a tu estilo y necesidad.' },
  { icono: 'clock', titulo: 'Abierto todos los días', detalle: 'Lunes a domingo, de 10 a. m. a 10 p. m.' },
];

export type Foto = { src: string; nombre: string; alt: string; ancho: number; alto: number };

// `nombre` se usa en el botón "Lo quiero" para que el mensaje de WhatsApp diga cuál es.
export const GALERIA: Foto[] = [
  { src: '/assets/img/francesa-espejo.webp', nombre: 'Francesa efecto espejo', alt: 'Uñas almendradas con francesa efecto espejo y anillos dorados', ancho: 480, alto: 640 },
  { src: '/assets/img/rubber-chocolate.webp', nombre: 'Rubber chocolate', alt: 'Uñas cortas en tono chocolate brillante', ancho: 481, alto: 320 },
  { src: '/assets/img/diseno-puntos.webp', nombre: 'Francesa chocolate con puntos', alt: 'Uñas nude con francesa chocolate y diseño de puntos', ancho: 480, alto: 640 },
  { src: '/assets/img/francesa-color.webp', nombre: 'Francesa con líneas de color', alt: 'Uñas cuadradas con francesa blanca y líneas de color', ancho: 480, alto: 640 },
  { src: '/assets/img/francesa-clasica.webp', nombre: 'Francesa clásica', alt: 'Francesa clásica sobre uña natural', ancho: 480, alto: 397 },
  { src: '/assets/img/pedicure.webp', nombre: 'Pedicure con francesa fina', alt: 'Pedicure con francesa fina y anillo dorado', ancho: 480, alto: 640 },
];

// Si `PROMO_MES.activa` es false, la barra superior y la banda de oferta no se muestran.
// El contenido real de la "Promoción del mes" está en los destacados de Instagram: reemplazar
// `titulo` y `detalle` con la promo vigente cuando la clienta la confirme.
export const PROMO_MES = {
  activa: true,
  barra: 'Tenemos promoción del mes 🤍',
  titulo: 'Consiéntete. Ahorra. Brilla.',
  detalle: 'Cada mes preparamos una promoción especial para ti. Escríbenos y te contamos cuál es la de este mes antes de que se acabe.',
  mensaje: 'Hola Viviam 🤍 Quiero saber cuál es la promoción del mes.',
};

// Mientras no haya reseñas reales de clientas, esta sección muestra frases de sus propias
// publicaciones. Cuando lleguen reseñas (Google, mensajes con permiso), reemplazarlas aquí.
export const FRASES = [
  { texto: 'Amor propio es: una manicure recién hecha.', fuente: 'Publicación de Instagram' },
  { texto: 'La belleza está en los detalles, y los detalles son nuestra especialidad.', fuente: 'Publicación de Instagram' },
  { texto: 'Las uñas francesas con efecto espejo reflejan seguridad, elegancia y amor propio.', fuente: 'Publicación de Instagram' },
  { texto: 'Acá no es solo sobre hacerte las uñas. Es sobre mirarte y sentirte bien.', fuente: 'Publicación de Instagram' },
];
