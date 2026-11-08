// Ara tatil programı görsellerini üretir: node olustur.js
// Çıktı: gorseller/00-kapak.png, 01-5.png ... (1080x1350, Instagram ve WhatsApp için)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const p = JSON.parse(fs.readFileSync(path.join(dir, 'program.json'), 'utf8'));
const logo = 'data:image/png;base64,' + fs.readFileSync(path.join(dir, '../../../marka/logo/odak-logo.png')).toString('base64');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const gunEtiket = { dinlen: 'Dinlenme', calis: 'Çalışma', prova: 'Prova', hazirlik: 'Hazırlık' };
const gunSerit = (renk) => `
  <div class="serit">
    ${p.gunler.map(g => `
      <div class="gun ${g.tip}" style="--k:${renk}">
        <div class="gno">${g.g}</div><div class="gad">${g.ad}</div>
        <div class="gtip">${gunEtiket[g.tip]}</div><div class="kutu"></div>
      </div>`).join('')}
  </div>`;

const ust = (alt) => `
  <div class="ust">
    <div class="marka"><img src="${logo}" alt="Odak Eğitim"><span>Rehberlik Birimi</span></div>
    <div class="tarih">${esc(p.tarih)}</div>
  </div>
  <div class="altbaslik">${alt}</div>`;

const kapak = `
<section class="card kapak">
  ${ust('Ara Tatil')}
  <h1>Ara Tatil<br>Çalışma Programı</h1>
  <p class="lead">Her kademeye ayrı süre, günlük akış ve ders ders nasıl çalışılacağı. Çocuğunuzun sınıfına ait kartı kaydedin.</p>
  ${gunSerit('#404F6E')}
  <div class="kurallar">
    ${p.kurallar.map((k, i) => `
      <div class="kural"><div class="kno">${i + 1}</div>
      <div><b>${esc(k[0])}</b><span>${esc(k[1])}</span></div></div>`).join('')}
  </div>
  <div class="ogun">${p.ozelgunler.map(o => `<div><b>${esc(o[0])}</b><span>${esc(o[1])}</span></div>`).join('')}</div>
  <div class="kademeler">${p.kademeler.map(k => `<span style="background:${k.renk}">${esc(k.ad.split(' · ')[0])}</span>`).join('')}</div>
  <div class="alt">Kartları kaydırın →</div>
</section>`;

const kart = (k) => `
<section class="card" style="--k:${k.renk}">
  ${ust('Ara Tatil Çalışma Programı')}
  <div class="kbas">
    <h2>${esc(k.ad)}</h2>
    <div class="sure"><b>${esc(k.sure)}</b><span>günde · ${esc(k.blok)}</span></div>
  </div>
  <table>
    <tr><th>Ders</th><th>Günlük</th><th>Nasıl çalışmalı?</th></tr>
    ${k.dersler.map(d => `<tr><td class="ders">${esc(d[0])}</td><td class="mik">${esc(d[1])}</td><td>${esc(d[2])}</td></tr>`).join('')}
  </table>
  <div class="ozel"><b>Prova günü</b>${esc(k.ozel)}</div>
  <div class="takip">Takip çizelgesi · tamamladığı günü işaretlesin</div>
  ${gunSerit(k.renk)}
  <div class="not"><b>Velimize not:</b> ${esc(k.not)}</div>
</section>`;

const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--petrol:#404F6E;--koyu:#2C3650;--turuncu:#E54F37;--krem:#FBF7F0;--metin:#1E2A2E;--gri:#5B6B70;--cizgi:#E6DED0}
*{box-sizing:border-box;margin:0;padding:0}
body{background:#ccc;font-family:Inter,sans-serif;color:var(--metin)}
.card{width:1080px;height:1350px;background:var(--krem);padding:64px 68px 56px;position:relative;overflow:hidden;
  display:flex;flex-direction:column;margin-bottom:20px;--k:var(--petrol)}
.card::before{content:"";position:absolute;right:-180px;top:-180px;width:460px;height:460px;border-radius:50%;background:var(--k);opacity:.10}
.ust{display:flex;justify-content:space-between;align-items:flex-start}
.marka img{display:block;height:58px}
.marka span{display:block;font-family:Inter;font-weight:500;font-size:20px;letter-spacing:0;color:var(--gri);margin-top:2px}
.tarih{background:var(--turuncu);color:#fff;font-weight:600;font-size:22px;padding:10px 20px;border-radius:40px}
.altbaslik{margin-top:26px;font-size:20px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--k)}
h1{font-family:Nunito;font-weight:900;font-size:92px;line-height:1.02;color:var(--koyu);margin-top:10px}
.lead{font-size:28px;line-height:1.4;color:var(--gri);margin-top:22px;max-width:860px}
.kbas{display:flex;justify-content:space-between;align-items:flex-end;margin-top:6px;padding-bottom:22px;border-bottom:4px solid var(--k)}
h2{font-family:Nunito;font-weight:900;font-size:64px;line-height:1.05;color:var(--k);max-width:560px}
.sure{text-align:right}
.sure b{display:block;font-family:Nunito;font-weight:900;font-size:40px;color:var(--koyu)}
.sure span{font-size:20px;color:var(--gri)}
table{width:100%;border-collapse:collapse;margin-top:18px}
th{text-align:left;font-size:17px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gri);font-weight:600;padding:6px 10px 10px}
td{font-size:22px;line-height:1.32;padding:15px 10px;border-top:1px solid var(--cizgi);vertical-align:top}
td.ders{font-weight:700;width:225px;color:var(--koyu)}
td.mik{font-weight:600;width:235px;color:var(--k)}
.ozel{margin-top:16px;background:#fff;border-left:8px solid var(--k);border-radius:14px;padding:18px 22px;font-size:22px;line-height:1.38}
.ozel b{display:block;font-size:17px;letter-spacing:1.5px;text-transform:uppercase;color:var(--k);margin-bottom:4px}
.takip{margin-top:auto;font-size:18px;font-weight:600;color:var(--gri);margin-bottom:10px}
.serit{display:grid;grid-template-columns:repeat(9,1fr);gap:8px}
.kapak .serit{margin-top:34px}
.gun{background:#fff;border-radius:14px;padding:10px 4px 12px;text-align:center;border:2px solid var(--cizgi)}
.gun.calis{border-color:var(--k)}
.gun.prova{background:var(--k);color:#fff;border-color:var(--k)}
.gun.dinlen{background:#EEF4F1}
.gno{font-family:Nunito;font-weight:900;font-size:30px;line-height:1}
.gad{font-size:15px;font-weight:600;opacity:.75}
.gtip{font-size:13px;font-weight:600;margin-top:4px;opacity:.85}
.kutu{width:24px;height:24px;border:2px solid currentColor;border-radius:6px;margin:8px auto 0;opacity:.6}
.gun.dinlen .kutu{visibility:hidden}
.not{margin-top:20px;font-size:21px;line-height:1.4;color:var(--koyu);background:rgba(64,79,110,.08);border-radius:14px;padding:16px 20px}
.kurallar{margin-top:34px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
.kural{display:flex;gap:16px;background:#fff;border-radius:18px;padding:22px}
.kno{flex:none;width:46px;height:46px;border-radius:50%;background:var(--petrol);color:#fff;font-family:Nunito;font-weight:900;font-size:26px;display:flex;align-items:center;justify-content:center}
.kural b{display:block;font-size:24px;color:var(--koyu);line-height:1.25}
.kural span{display:block;font-size:20px;color:var(--gri);margin-top:6px;line-height:1.35}
.kademeler{margin-top:auto;display:flex;flex-wrap:wrap;gap:10px}
.kademeler span{color:#fff;font-weight:700;font-size:20px;padding:9px 18px;border-radius:30px}
.alt{position:absolute;right:68px;bottom:62px;font-size:20px;font-weight:600;color:var(--gri)}
.kapak .kademeler{max-width:760px}
.ogun{margin-top:18px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
.ogun div{border:2px dashed var(--petrol);border-radius:18px;padding:18px 22px}
.ogun b{display:block;font-size:20px;color:var(--petrol);letter-spacing:.5px}
.ogun span{display:block;font-size:19px;color:var(--gri);margin-top:6px;line-height:1.35}
</style></head><body>
${kapak}
${p.kademeler.map(kart).join('\n')}
</body></html>`;

(async () => {
  const out = path.join(dir, 'gorseller');
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(dir, 'onizleme.html'), html);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const cards = await page.$$('section.card');
  const names = ['00-kapak', ...p.kademeler.map((k, i) => `${String(i + 1).padStart(2, '0')}-${k.id}`)];
  // Taşma kontrolü: içerik kart yüksekliğini aşmasın
  const tasma = await page.$$eval('section.card', cs => cs.map(c => c.scrollHeight > c.clientHeight + 1));
  for (let i = 0; i < cards.length; i++) {
    if (tasma[i]) console.warn('UYARI: taşma var →', names[i]);
    await cards[i].screenshot({ path: path.join(out, names[i] + '.png') });
  }
  await browser.close();
  console.log('Üretildi:', names.join(', '));
})();
