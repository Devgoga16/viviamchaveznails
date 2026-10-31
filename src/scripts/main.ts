// Interacciones de la landing: menú móvil, encabezado, galería con filtros y visor
// (con botón "Quiero este diseño"), y formulario que arma el mensaje de WhatsApp.

const WHATSAPP = '51916128298';
const $ = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

// Encabezado con sombra al hacer scroll
const header = $<HTMLElement>('#header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menú móvil
const mobileNav = $<HTMLElement>('#mobile-nav');
const menuBtn = $<HTMLButtonElement>('[data-menu-open]');
const setMenu = (open: boolean) => {
  mobileNav?.classList.toggle('open', open);
  mobileNav?.setAttribute('aria-hidden', String(!open));
  menuBtn?.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
};
menuBtn?.addEventListener('click', () => setMenu(true));
$$('[data-menu-close], [data-menu-link]').forEach((el) => el.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Galería: filtros
const items = $$<HTMLElement>('.gallery-item');
$$<HTMLButtonElement>('[data-filter]').forEach((chip, _, chips) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    const cat = chip.dataset.filter;
    items.forEach((item) => item.classList.toggle('is-hidden', cat !== 'todos' && item.dataset.cat !== cat));
  });
});

// Galería: visor
const lightbox = $<HTMLDialogElement>('[data-lightbox]');
const lbImg = $<HTMLImageElement>('[data-lb-img]');
const lbCap = $<HTMLElement>('[data-lb-cap]');
const lbWa = $<HTMLAnchorElement>('[data-lb-wa]');
let current = 0;
const visibles = () => items.filter((i) => !i.classList.contains('is-hidden'));
const show = (item: HTMLElement) => {
  const img = item.querySelector('img');
  if (!img || !lbImg || !lbCap) return;
  current = visibles().indexOf(item);
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  const nombre = item.dataset.nombre ?? img.alt;
  lbCap.textContent = nombre;
  if (lbWa) lbWa.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola Viviam 🤍 Quiero este diseño: ${nombre}.`)}`;
};
const step = (dir: number) => {
  const list = visibles();
  show(list[(current + dir + list.length) % list.length]);
};
items.forEach((item) => item.querySelector('button')?.addEventListener('click', () => { show(item); lightbox?.showModal(); }));
$('[data-lb-close]')?.addEventListener('click', () => lightbox?.close());
$('[data-lb-prev]')?.addEventListener('click', () => step(-1));
$('[data-lb-next]')?.addEventListener('click', () => step(1));
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });
lightbox?.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

// Frases: flechas que desplazan la fila de tarjetas
const slider = $<HTMLElement>('[data-slider]');
$$<HTMLButtonElement>('[data-slide]').forEach((btn) => btn.addEventListener('click', () => {
  const card = slider?.firstElementChild as HTMLElement | null;
  if (!slider || !card) return;
  slider.scrollBy({ left: Number(btn.dataset.slide) * (card.offsetWidth + 20), behavior: 'smooth' });
}));

// Formulario de reserva: no guarda datos, solo arma el mensaje y abre WhatsApp
const form = $<HTMLFormElement>('[data-booking]');
const fecha = $<HTMLInputElement>('#f-fecha');
if (fecha) fecha.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

const formatoFecha = (valor: string) => {
  if (!valor) return '';
  const [y, m, d] = valor.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' });
};

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = String(data.get('nombre') ?? '').trim();
  const error = $<HTMLElement>('[data-form-error]');
  const campoNombre = $<HTMLElement>('#f-nombre')?.closest('.field');
  if (!nombre) {
    error?.removeAttribute('hidden');
    campoNombre?.classList.add('invalid');
    $<HTMLInputElement>('#f-nombre')?.focus();
    return;
  }
  error?.setAttribute('hidden', '');
  campoNombre?.classList.remove('invalid');

  const dia = formatoFecha(String(data.get('fecha') ?? ''));
  const nota = String(data.get('nota') ?? '').trim();
  const lineas = [
    `Hola Viviam 🤍 Soy ${nombre} y quisiera reservar una cita.`,
    `• Servicio: ${data.get('servicio')}`,
    dia ? `• Día: ${dia}` : '• Día: el que tengas disponible',
    `• Horario: ${data.get('turno')}`,
    nota ? `• Comentario: ${nota}` : '',
  ].filter(Boolean);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank', 'noopener');
});
