---
name: rehberlik-programi
description: Ara tatil, yarıyıl tatili, sınav haftası, karne dönemi gibi zamanlar için Odak Eğitim rehberlik biriminin kademe bazlı (5, 6, 7, 8/LGS, 9-10, 11, 12/mezun) çalışma programını hazırlar. Çıktı: şık görsel kartlar (Instagram + WhatsApp veli grupları), veli grubu mesajı ve koçlara yönlendirme mesajı. "Tatil programı", "çalışma programı hazırla", "veli gruplarına program" denildiğinde kullan.
---

# Rehberlik Programı

Örnek ve kod: `sosyal-medya/programlar/2026-11-ara-tatil/`. Yeni program için bu klasörü
`sosyal-medya/programlar/<YYYY-AA>-<ad>/` olarak kopyala.

1. **Tarihleri doğrula:** Drive'daki `Odak Eğitim Deneme Takvimi 2026-2027` dosyasından dönemi ve dönüşteki ilk denemeleri al.
   Gün adlarını `python3` ile hesapla.
2. **İçerik (`program.json`):** Her kademe için süre, blok yapısı ve 5 satır ders yaz (ders, günlük miktar, nasıl çalışmalı).
   Ayrıca prova günü ve velimize not ekle. **Konu bazlı değil, yöntem bazlı yaz.** Öğrenci adı kullanma.
   Kural: süreler kademeyle artar. Mezunun okulu olmadığı için en uzun süre onundur.
3. `gunler`, `kurallar`, `ozelgunler`, `baslik`, `tarih` alanlarını döneme göre güncelle.
4. **Görselleri üret:** `node olustur.js`. Çıktıda "taşma" uyarısı varsa metni kısalt. PNG'lere tek tek bak.
5. **Mesajları yaz (README.md):** veli grubu mesajı, koç yönlendirme mesajı (onay istemez, 3 adım) ve dağıtım takvimi.
6. **Denetle:** `denetim/post-denetim-listesi.md`. Sınav süreleri gibi dış bilgileri doğrula.
7. Haftalık plan dosyasına Instagram postu olarak ekle ve görselleri kullanıcıya gönder.
