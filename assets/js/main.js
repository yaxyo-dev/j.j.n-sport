document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  toggle.textContent = open ? '×' : '☰';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!event.target.closest('header')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});
function updateLocalTime() {
  const clock = document.getElementById('localTime');
  clock.textContent = new Intl.DateTimeFormat('uz-UZ', {
    timeZone: 'Asia/Tashkent', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(new Date());
}
updateLocalTime();
setInterval(updateLocalTime, 60000);
let toastTimer;
function announce(message) {
  const status = document.getElementById('siteStatus');
  status.textContent = message;
  status.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => status.classList.remove('visible'), 4000);
}
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) { /* Try browser selection when clipboard permission is unavailable. */ }
  }
  const previous = document.activeElement;
  const field = document.createElement('textarea');
  field.value = text;
  field.readOnly = true;
  field.style.cssText = 'position:fixed;top:0;left:-9999px';
  document.body.append(field);
  field.select();
  field.setSelectionRange(0, text.length);
  let copied = false;
  try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
  field.remove();
  previous?.focus({preventScroll:true});
  return copied;
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const copied = await copyText(button.dataset.copy);
    announce(copied ? 'Nusxalandi. Manzilni xaritada yoki xabarda ishlatishingiz mumkin.' : 'Nusxalanmadi. Manzil matnini belgilab, qo‘lda nusxalang.');
  });
});
const backTop = document.querySelector('.back-top');
function updateBackTop() { backTop.hidden = window.scrollY < 700; }
window.addEventListener('scroll', updateBackTop, {passive:true});
updateBackTop();
backTop.addEventListener('click', () => {
  document.getElementById('home').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  document.querySelector('.brand').focus({preventScroll:true});
});
