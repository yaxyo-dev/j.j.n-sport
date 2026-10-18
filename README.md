# J.J.N-SPORT

Kattaqo‘rg‘ondagi J.J.N-SPORT do‘konining moviy uslubdagi taqdimot sayti.
Do‘kon haqida, manzil va ish vaqti, telefonlar, Telegram kontaktlari hamda
ijtimoiy tarmoqlar bir sahifada jamlangan.

## Ishga tushirish

Paket o‘rnatish yoki build kerak emas. Repozitoriy papkasida quyidagini bajaring:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

HTML, CSS, JavaScript va SVG fayllari birga ishlaydi. Saytni mahalliy HTTP server
orqali oching; faqat `index.html` faylini ko‘chirish yetarli emas.

## Fayllar tuzilishi

```text
index.html                    Sahifa tuzilishi va do‘kon ma’lumotlari
assets/css/styles.css         Moviy dizayn va mobil moslashuv
assets/js/main.js             Menyu, vaqt, nusxalash va yuqoriga qaytish
assets/icons/sprite.svg       Qayta ishlatiladigan ikonkalar
assets/images/runner.svg      Sportchi rasmi
assets/images/sport-shirt.svg Kiyim yo‘nalishi rasmi
assets/images/sport-shoes.svg  Oyoq kiyim yo‘nalishi rasmi
assets/images/sport-ball.svg   Anjomlar yo‘nalishi rasmi
assets/images/storefront.svg   Do‘konning badiiy tasviri
.nojekyll                     GitHub Pages uchun statik sayt belgisi
```

## GitHub Pages orqali nashr qilish

1. `index.html`, butun `assets/` papkasi va `.nojekyll` faylini repozitoriyning `main` branchiga yuboring.
2. GitHub’da **Settings → Pages** bo‘limini oching.
3. **Deploy from a branch**, **main** va **/(root)** ni tanlab, **Save** ni bosing.
4. Nashr tugagach, GitHub Pages bo‘limida ko‘rsatilgan sayt havolasini oching.

## Netlify orqali nashr qilish

`netlify.toml` nashr papkasini repozitoriy ildizi qilib belgilaydi. Build buyrug‘i kerak emas.
Netlify’da GitHub orqali ushbu repozitoriy va `main` branchini ulang.
Keyingi muvaffaqiyatli pushlardan so‘ng Netlify saytni avtomatik yangilaydi.

Google Maps uchun internet kerak. Do‘kon rasmi badiiy tasvir sifatida belgilangan.
Ish vaqti o‘zgarishi mumkin; tashrifdan oldin sahifadagi kontaktlar orqali aniqlashtiring.
