# Koçluk Raporu Denetim Listesi

Kaynak: Drive'daki `Koçluk Raporu · <grup>` dosyaları, `KOÇLUK RAPORLARI GENEL BAKIŞ` ve `Rehberlik Takip Paneli`.
Kurallar her dosyadaki `Doldurma Rehberi` sekmesinden gelir.

## A. Doluluk (koç bazında)
| Kontrol | Kural | Bulgu nasıl yazılır |
|---|---|---|
| Rapor başlatıldı mı? | Genel Bakış'ta "Doldurulmadı" yazıyorsa başlatılmamıştır | `<grup> · <koç>: rapor açılmamış` |
| V satırı (11. satır) | Ödev verilen her derste V dolu olmalı | `V satırı boş → tamamlama % hesaplanamıyor` |
| Ç / Nitelik / Çizelge | Her öğrenci için dolu olmalı | `Ç eksik: 8 öğrenci` |
| Veli görüşmesi | Her öğrencide "Görüşüldü" ya da "Ulaşılamadı" seçilmeli | sayı |
| **Koç notu niteliği** | "Tespit + ölçülebilir karar" olmalı (Doldurma Rehberi md. 6) | `Not var ama karar yok: 4 öğrenci` |

### Koç notu kalite testi
- ❌ "Açıklanan sınavı yok", "Biraz stresli ama çalışıyor": karar yok, ölçülemez.
- ✅ "Fen testlerinin 3'ü boş; her gün 10 soru, cuma koça kontrol." Tespit, sayı ve tarih var.
- Not "sınav yok" türünde bir bilgiyse koça şunu sor: "Bu hafta bu öğrenci için hangi adımı attık?"

## B. Veri tutarlılığı (Öğrenci Listesi)
- Aynı öğrenci iki farklı grupta mı? Çift kayıt Genel Bakış sayılarını bozar.
- Aynı veli adı farklı telefonla mı yazılmış? Kardeşte telefon aynı olmalı. Tek hane farkı çoğunlukla yazım hatasıdır.
- Öğrenci soyadı ile veli soyadı arasında yazım farkı var mı? (ör. "Yılmazer / Yılmazar") Kontrol ettir.
- Koç adı boş grup ya da öğrenci listesi boş grup var mı?
- Aynı koç adı iki farklı biçimde mi yazılmış? ("Ayşe Hoca" / "Ayşe Demir") Genel Bakış'ta koç bazlı sayımı bozar.

## C. Risk (öğrenci bazında) → `kocluk/risk-oncelik-kurallari.md`

## D. Çıktı
1. **Koç bazlı eksik tablosu** ve her koça gidecek hatırlatma mesajı (`kocluk/koc-hatirlatma-sablonlari.md`).
2. **Öncelik listesi** (P1/P2/P3) ve her öğrenci için önerilen ilk adım.
3. **Yapısal sorunlar** (çift kayıt, boş liste, koç adı tutarsızlığı).
4. **Denetçi itirazı**: Bu hafta sistemin kendisinde gördüğün bir zayıflık (form, eşik, süreç).

> Gerçek isimli çıktılar repoya yazılmaz. Sohbette verilir ya da kullanıcının Drive'ına kaydedilir.
