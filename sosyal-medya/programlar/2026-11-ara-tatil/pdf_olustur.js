// Ara tatil programını öğrenciye verilecek A4 belge olarak üretir (her kademe: ön-arka tek yaprak).
//   node pdf_olustur.js            → 5, 6, 7 (akış tanımlı kademeler)
//   node pdf_olustur.js 5,6        → seçilen kademeler
// Çıktı: pdf/<id>-sinif.pdf (öğrenci başına) + pdf/hepsi-baski.pdf (fotokopi için tek dosya)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const p = JSON.parse(fs.readFileSync(path.join(dir, 'program.json'), 'utf8'));
const logo = 'data:image/png;base64,' + fs.readFileSync(path.join(dir, '../../../marka/logo/odak-logo.png')).toString('base64');
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const secim = process.argv[2] ? process.argv[2].split(',') : null;
const kademeler = p.kademeler.filter(k => k.akis && (!secim || secim.includes(k.id)));

const calismaGunleri = p.gunler.filter(g => g.tip === 'calis' || g.tip === 'prova' || g.tip === 'tekrar');

const ust = (k, sayfa) => `
  <header>
    <img src="${logo}" alt="Odak Eğitim">
    <div class="ust-sag"><b>${esc(k.ad)}</b><span>${esc(p.baslik)} · ${esc(p.tarih)}</span></div>
  </header>
  <div class="serit" style="background:${k.renk}"></div>`;

const alt = (no) => `
  <footer>
    <span>Odak Eğitim Rehberlik Birimi</span>
    <span>${esc(p.dipnot)}</span>
    <span>${no}/2</span>
  </footer>`;

const sayfa1 = (k) => `
<section class="sayfa" style="--k:${k.renk}">
  ${ust(k)}
  <div class="kimlik">
    <div><label>Öğrenci</label><i></i></div>
    <div><label>Sınıf / Grup</label><i></i></div>
    <div><label>Koç öğretmen</label><i></i></div>
  </div>

  <div class="ozet">
    <div class="kutu"><small>Günlük süre (yaklaşık)</small><b>${esc(k.sure)}</b></div>
    <div class="kutu"><small>Çalışma düzeni</small><b>${esc(k.blok)}</b></div>
    <div class="kutu"><small>Çalışma günü</small><b>${calismaGunleri.length - 1} + 1 ${calismaGunleri.some(g => g.tip === 'tekrar') ? 'tekrar' : 'prova'}</b></div>
    <div class="kutu"><small>Tatil dönüşü</small><b>Koçunla birlikte bakacaksınız</b></div>
  </div>

  <h3>1 · Günlük öneriler ve ipuçları</h3>
  <table class="hedef">
    <thead><tr><th>Ders</th><th>Günlük öneri</th><th>İpucu</th></tr></thead>
    <tbody>${k.dersler.map(d => `<tr><td class="d">${esc(d[0])}</td><td class="m">${esc(d[1])}</td><td>${esc(d[2])}</td></tr>`).join('')}</tbody>
  </table>

  <div class="iki">
    <div>
      <h3>2 · Örnek günlük akış</h3>
      <table class="akis">
        ${k.akis.map(a => `<tr class="${/Mola|Serbest/.test(a[1]) ? 'hafif' : ''}"><td class="s">${esc(a[0])}</td><td class="n"><b>${esc(a[1])}</b>${a[2] ? ' · ' + esc(a[2]) : ''}</td></tr>`).join('')}
      </table>
    </div>
    <div>
      <h3>3 · Tatil takvimi</h3>
      <table class="takvim">
        ${p.gunler.map(g => `<tr class="${g.tip}"><td>${g.g} Kas ${g.ad}</td><td>${({dinlen:'Dinlenme · ders yok', calis:'Çalışma günü', prova:'Prova günü', tekrar:'Tekrar günü · yeni soru yok', hazirlik:'Hazırlık günü'})[g.tip]}</td></tr>`).join('')}
      </table>
      <div class="prova"><b>${esc(k.ozelBaslik || 'Prova günü')}</b>${esc(k.ozel)}</div>
    </div>
  </div>

  <h3>4 · Dört kural</h3>
  <ol class="kurallar">${p.kurallar.map(r => `<li><b>${esc(r[0])}.</b> ${esc(r[1])}</li>`).join('')}</ol>
  <p class="velinot"><b>Velimize not:</b> ${esc(k.not)}</p>
  ${alt(1)}
</section>`;

const sayfa2 = (k) => `
<section class="sayfa" style="--k:${k.renk}">
  ${ust(k)}
  <h3>5 · Emek çizelgem</h3>
  <p class="aciklama">Çalıştığın her ders için o günün kutusuna ✓ koy. İstersen kaç soru çözdüğünü de yazabilirsin. Bu bir sınav değil, kendi emeğini görmen için.</p>
  <table class="cizelge">
    <thead>
      <tr><th class="ders">Ders · günlük öneri</th>${calismaGunleri.map(g => `<th class="${g.tip}">${g.g} Kas<br><small>${g.ad}${g.tip === 'prova' ? ' · Prova' : g.tip === 'tekrar' ? ' · Tekrar' : ''}</small></th>`).join('')}<th>Toplam</th></tr>
    </thead>
    <tbody>
      ${k.takip.map(t => `<tr><td class="ders"><b>${esc(t[0])}</b><small>${esc(t[1])}</small></td>${calismaGunleri.map(g => `<td class="${g.tip}"></td>`).join('')}<td class="top"></td></tr>`).join('')}
      <tr class="his"><td class="ders"><b>Bugün nasıldım?</b><small>Birini yuvarlak içine al</small></td>${calismaGunleri.map(g => `<td class="${g.tip} yuz">🙂 😐 🙁</td>`).join('')}<td class="top"></td></tr>
      <tr class="paraf"><td class="ders"><b>Veli parafı</b><small>Her akşam</small></td>${calismaGunleri.map(g => `<td class="${g.tip}"></td>`).join('')}<td class="top"></td></tr>
    </tbody>
  </table>

  <div class="iki alt-blok">
    <div>
      ${calismaGunleri.some(g => g.tip === 'prova') ? `
      <h3>6 · Prova sonucu (${esc(calismaGunleri.find(g => g.tip === 'prova').g)} Kasım)</h3>
      <table class="prova-tablo">
        <tr><th></th><th>Doğru</th><th>Yanlış</th><th>Boş</th><th>Süre</th></tr>
        ${['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce'].map(d => `<tr><td>${d}</td><td></td><td></td><td></td><td></td></tr>`).join('')}
      </table>` : `
      <h3>6 · Tekrar günü notlarım</h3>
      <table class="prova-tablo">
        <tr><th>Ders</th><th>Tekrar ettiğim konu</th><th>Yanlış sayısı</th></tr>
        ${['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce'].map(d => `<tr><td>${d}</td><td></td><td></td></tr>`).join('')}
      </table>`}
    </div>
    <div>
      <h3>7 · Kendi değerlendirmem</h3>
      <div class="satirlar">
        <label>En çok zorlandığım ders ve nedeni:</label><i></i><i></i>
        <label>Tatilde öğrendiğim en önemli 3 şey:</label><i></i><i></i><i></i>
        <label>Tatil dönüşü koçumla konuşmak istediğim konu:</label><i></i>
      </div>
    </div>
  </div>

  ${p.zorlanirsan ? `<div class="zor"><b class="bas">Zorlandığında ne yapabilirim?</b><ul>${p.zorlanirsan.map(z => `<li><b>${esc(z[0])}.</b> ${esc(z[1])}</li>`).join('')}</ul></div>` : ''}
  <div class="koc">
    <b>Koçumla birlikte · 23-29 Kasım</b>
    <span>☐ Çizelgeye birlikte bakıldı</span><span>☐ Emeği takdir edildi</span><span>☐ Zorlandığı konular konuşuldu</span>
    <span class="imza">Koç imzası: ............................</span>
  </div>
  ${alt(2)}
</section>`;

const css = `
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,sans-serif;color:#1E2A2E;font-size:9.3pt;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.sayfa{width:210mm;height:297mm;padding:11mm 13mm 9mm;position:relative;page-break-after:always;overflow:hidden}
header{display:flex;justify-content:space-between;align-items:center}
header img{height:11mm}
.ust-sag{text-align:right}
.ust-sag b{display:block;font-family:Nunito;font-weight:900;font-size:17pt;color:var(--k);line-height:1.1}
.ust-sag span{font-size:8.5pt;color:#5B6B70}
.serit{height:1.6mm;border-radius:1mm;margin:3mm 0 4mm}
h3{font-family:Nunito;font-weight:800;font-size:11pt;color:#2C3650;margin:4.5mm 0 2mm;letter-spacing:.2px}
.kimlik{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:5mm}
.kimlik div{display:flex;align-items:flex-end;gap:2mm}
.kimlik label{font-size:8pt;color:#5B6B70;white-space:nowrap}
.kimlik i{flex:1;border-bottom:.3mm solid #9AA5A8;height:5mm}
.ozet{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin-top:4mm}
.kutu{border:.3mm solid #E2DCCF;border-top:1.2mm solid var(--k);border-radius:2mm;padding:2.2mm 3mm;background:#FBF7F0}
.kutu small{display:block;font-size:7.3pt;color:#5B6B70;text-transform:uppercase;letter-spacing:.6px}
.kutu b{font-size:10pt;color:#2C3650}
table{width:100%;border-collapse:collapse}
.hedef th{background:#404F6E;color:#fff;text-align:left;font-size:8pt;padding:1.8mm 2.5mm;font-weight:600}
.hedef td{padding:2mm 2.5mm;border-bottom:.25mm solid #E2DCCF;vertical-align:top;line-height:1.35}
.hedef td.d{font-weight:700;width:34mm;color:#2C3650}
.hedef td.m{font-weight:700;width:42mm;color:var(--k)}
.hedef tr:nth-child(even) td{background:#FBF7F0}
.iki{display:grid;grid-template-columns:1.15fr 1fr;gap:6mm}
.akis td{padding:1.5mm 2mm;border-bottom:.25mm solid #E2DCCF;line-height:1.3}
.akis td.s{white-space:nowrap;width:22mm;color:#5B6B70;font-variant-numeric:tabular-nums}
.akis tr.hafif td{color:#8A9599;font-size:8.3pt}
.akis tr.hafif b{font-weight:500}
.takvim td{padding:1.15mm 2mm;border-bottom:.25mm solid #E2DCCF;font-size:8.5pt}
.takvim tr.dinlen td{color:#3E9B6B}
.takvim tr.prova td,.takvim tr.tekrar td{background:var(--k);color:#fff;font-weight:700}
.takvim tr.hazirlik td{color:#5B6B70;font-style:italic}
.prova{margin-top:2.5mm;border-left:1.2mm solid var(--k);background:#FBF7F0;padding:2mm 3mm;border-radius:1mm;line-height:1.35;font-size:8.6pt}
.prova b{display:block;font-size:7.5pt;text-transform:uppercase;letter-spacing:.6px;color:var(--k)}
.kurallar{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:1.5mm 6mm;counter-reset:k}
.kurallar li{counter-increment:k;padding-left:6mm;position:relative;line-height:1.35}
.kurallar li::before{content:counter(k);position:absolute;left:0;top:0;width:4.2mm;height:4.2mm;border-radius:50%;background:#E54F37;color:#fff;font-size:7pt;font-weight:700;display:flex;align-items:center;justify-content:center}
.velinot{margin-top:3.5mm;background:rgba(64,79,110,.08);padding:2.5mm 3.5mm;border-radius:2mm;line-height:1.4}
.aciklama{color:#5B6B70;margin-bottom:2.5mm;line-height:1.4}
.cizelge th{background:#404F6E;color:#fff;font-size:8pt;padding:1.8mm 1mm;text-align:center;font-weight:600;border:.25mm solid #404F6E}
.cizelge th.prova,.cizelge th.tekrar{background:var(--k);border-color:var(--k)}
.cizelge th small{font-weight:400;opacity:.85}
.cizelge th.ders{text-align:left;padding-left:2.5mm;width:44mm}
.cizelge td{border:.25mm solid #C9C2B4;height:11.5mm}
.cizelge td.ders{padding:1.5mm 2.5mm;line-height:1.25}
.cizelge td.ders small{display:block;color:var(--k);font-weight:600;font-size:8pt}
.cizelge td.prova,.cizelge td.tekrar{background:#FBF7F0}
.cizelge td.top{background:#F1EEE7;width:17mm}
.cizelge tr.paraf td{height:10mm}
.cizelge tr.his td{height:10mm}
.cizelge td.yuz{text-align:center;font-size:7.5pt;letter-spacing:0;white-space:nowrap;font-family:'Noto Color Emoji',Inter,sans-serif}
.zor{margin-top:4mm;border-radius:2mm;background:#EEF4F1;padding:3mm 4mm}
.zor b.bas{display:block;font-family:Nunito;font-weight:800;color:#2C3650;font-size:10.5pt;margin-bottom:1.5mm}
.zor ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:1.5mm 6mm}
.zor li{line-height:1.35}
.zor li b{color:#3E9B6B}
.alt-blok{margin-top:1mm}
.prova-tablo th{font-size:8pt;color:#5B6B70;font-weight:600;padding:1.3mm;border-bottom:.4mm solid #404F6E;text-align:center}
.prova-tablo td{border:.25mm solid #C9C2B4;height:7.3mm;padding:0 2mm}
.prova-tablo td:first-child{font-weight:600;width:30mm;color:#2C3650}
.satirlar label{display:block;font-size:8.5pt;color:#2C3650;font-weight:600;margin-top:2.5mm}
.satirlar i{display:block;border-bottom:.25mm solid #9AA5A8;height:6.3mm}
.koc{margin-top:3.5mm;border:.4mm dashed #404F6E;border-radius:2mm;padding:3mm 4mm;display:flex;flex-wrap:wrap;gap:2mm 7mm;align-items:center;font-size:8.8pt}
.koc b{color:#404F6E;width:100%}
.koc .imza{margin-left:auto}
footer{position:absolute;left:13mm;right:13mm;bottom:7mm;display:flex;justify-content:space-between;gap:6mm;font-size:7pt;color:#8A9599;border-top:.25mm solid #E2DCCF;padding-top:2mm}
footer span:nth-child(2){text-align:center;font-style:italic}
`;

const belge = (ks) => `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style></head><body>${ks.map(k => sayfa1(k) + sayfa2(k)).join('')}</body></html>`;

(async () => {
  const out = path.join(dir, 'pdf');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  const yaz = async (html, dosya) => {
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const tasma = await page.$$eval('.sayfa', ss => ss.map(s => s.scrollHeight > s.clientHeight + 1));
    tasma.forEach((t, i) => t && console.warn(`UYARI: ${dosya} sayfa ${i + 1} taşıyor`));
    await page.pdf({ path: path.join(out, dosya), format: 'A4', printBackground: true });
  };
  for (const k of kademeler) await yaz(belge([k]), `${k.id}-sinif.pdf`);
  await yaz(belge(kademeler), 'hepsi-baski.pdf');
  await browser.close();
  console.log('Üretildi:', kademeler.map(k => k.id + '-sinif.pdf').join(', '), '+ hepsi-baski.pdf');
})();
