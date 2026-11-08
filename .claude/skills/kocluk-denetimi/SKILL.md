---
name: kocluk-denetimi
description: Odak Eğitim'in Google Drive'daki tüm "Koçluk Raporu · <grup>" dosyalarını seçilen hafta için denetler. Eksik dolduran koçları, kırmızı/sarı uyarılı öğrencileri öncelik sırasıyla, veri tutarsızlıklarını ve koçlara gidecek hatırlatma mesajlarını çıkarır. "Raporları denetle", "bu hafta kim doldurmadı", "riskli öğrenciler" denildiğinde kullan.
---

# Haftalık Koçluk Raporu Denetimi

**Gizlilik:** Bu denetimin çıktısında gerçek öğrenci ve veli bilgisi bulunur. Çıktı **repoya yazılmaz, commit edilmez.**
Sohbette ver. Kullanıcı isterse Drive'a ya da scratchpad'e kaydet.

## Adımlar
1. `denetim/kocluk-denetim-listesi.md`, `kocluk/risk-oncelik-kurallari.md` ve `kocluk/koc-hatirlatma-sablonlari.md` dosyalarını oku.
2. **Hafta:** Kullanıcı belirtmediyse biten hafta (bugün Pazar ise bu hafta) seçilir. Sekme adı biçimi: `2-8 Kas`, `9-15 Kas`, `30 Kas-6 Ara`.
3. **Genel tablo:** Drive'da `KOÇLUK RAPORLARI GENEL BAKIŞ` dosyasını bul, `Genel Bakış!A1:P35` aralığını oku (Google Sheets `get_values`). Koç, öğrenci sayısı, doluluk ve uyarı sayıları buradadır.
4. **Pano:** `Rehberlik Takip Paneli` → `Pano!A1:P60`. "Kırmızı uyarısı var, vakası açılmamış" listesini al.
5. **Gruplara in:** Genel Bakış'ta eksik görünen ya da uyarısı olan her grup için `Koçluk Raporu · <grup>` dosyasının hafta sekmesini (`'<hafta>'!A1:AH40`) oku. Şunlara bak:
   - 11. satır (V) dolu mu?
   - Öğrenci satırlarında Ç, Nitelik (P), Net (Q), Devam (R), Veli (S-T), Çizelge (V) ve Koç notu (AG) dolu mu?
   - Koç notu "tespit + ölçülebilir karar" testini geçiyor mu?
6. **Öğrenci Listesi tutarlılığı:** `'Öğrenci Listesi'!A1:M40`: çift kayıt (aynı öğrenci başka grupta), aynı velide farklı telefon, soyadı yazım farkı, boş koç alanı.
7. **Önceki hafta ile karşılaştır:** P3 olan öğrenci tekrar P3 ise P2'ye yükselt. Koç 2+ haftadır doldurmuyorsa bunu özellikle belirt.

## Çıktı (sohbette, bu sırayla)
1. **Özet (3 satır):** kaç grup tam, kaç grup eksik, kaç P1 öğrenci var.
2. **P1 · Bugün:** öğrenci, grup, neden, önerilen ilk adım, vakası açık mı?
3. **P2 / P3:** kısa tablo.
4. **Koç bazlı eksikler** ve her koça kopyala-yapıştır hazır **tek** hatırlatma mesajı.
5. **Veri sorunları.**
6. **Olumlu sinyaller:** ▲ net, %90+ tamamlama.
7. **Denetçi itirazı:** Sistemin kendisinde bu hafta gördüğün bir zayıflık ve önerin.

Raporlara **yazma** (değer değiştirme) işlemi kullanıcı açıkça istemeden yapılmaz.
