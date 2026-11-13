# Ara Tatil Çalışma Programı · 14-22 Kasım 2026

Rehberlik birimi tarafından hazırlanan **merkezî** program. Konu bazlı değildir. Her kademe için süre, günlük
miktar ve her dersin nasıl çalışılacağını içerir.

- İçerik: `program.json` (değişiklik buradan yapılır)
- Görseller: `node olustur.js` → `gorseller/*.png` (1080×1350, Instagram ve WhatsApp için)
- Kartlar: `00-kapak`, `01-5`, `02-6`, `03-7`, `04-8` (LGS), `05-9-10`, `06-11`, `07-12` (12 ve mezun)

## Durum (2026-11-08)
| Kademe | Durum |
|---|---|
| 5, 6, 7 | ✅ Kesinleşti. Görseller `gorseller-ortaokul/`, A4 çıktılar `yazdir-ortaokul/` |
| 8 (LGS), 12 / mezun | ⏸ Kurum tatilde açık olacak. Program kurumun tatil takvimine göre yeniden yazılacak |
| 9-10, 11 | ❓ Kurumun bu kademeler için tatilde açık olup olmadığı netleşmedi |

Yeniden üretmek için: `node olustur.js 5,6,7 ortaokul` (görsel kartlar) · `node pdf_olustur.js` (A4 belge)

## Öğrenci belgesi (A4, ön-arka tek yaprak) · `pdf/`
- **Ön yüz:** öğrenci/koç alanı · günlük hedef ve yöntem · saat saat örnek günlük akış · tatil takvimi · prova günü · 4 kural · velimize not
- **Arka yüz:** ders × gün takip çizelgesi (çözülen soru + veli parafı) · prova sonucu (D/Y/B) · öz değerlendirme · koç kontrol kutusu
- `pdf/5-sinif.pdf`, `pdf/6-sinif.pdf`, `pdf/7-sinif.pdf` · fotokopi için `pdf/hepsi-baski.pdf` (sırayla 5, 6, 7; **çift taraflı** basılır)
- Eski `yazdir-ortaokul/` çıktıları bu belgeyle değiştirildi.

## Dağıtım planı (ortaokul)
| Ne zaman | Kanal | Ne |
|---|---|---|
| Per 12 Kas sabah | Fotokopi | A4 belge (`pdf/`, çift taraflı): 5. sınıf 8 · 6. sınıf 26 · 7. sınıf 60 adet (öğrenci sayısı + %10 yedek). Renkli tercih edilir, siyah-beyaz da okunur |
| Per 12 Kas 18:00 | Koç grubu (5-6-7 koçları) | Yönlendirme mesajı + PDF'ler |
| Cum 13 Kas, son ders | Sınıfta | Koç çıktıyı dağıtır, 2 dakikada tanıtır, öğrenci adını yazar |
| Cum 13 Kas 19:00 | 5-6-7 veli WhatsApp grupları | Kapak + o grubun kademe kartı + bilgilendirme mesajı |
| Cum 13 Kas 20:30 | Instagram | Carousel: ortaokul kapak + 5, 6, 7 kartları |
| Pzt 23 Kas | Koçluk raporu | Takip çizelgesi kontrolü ("Çizelge getirdi mi?") |

> Neden veliye Cuma günü gönderiliyor? Çocuk çıktıyı elinde getirdiği akşam veliye de ulaşırsa ikisi aynı şeyi görür.
> Perşembe gönderilirse veli sorduğunda çocuk "daha almadık" der.

## Veli grubu mesajı (son hal · PDF ile birlikte gönderilir)
> Değerli velilerimiz, merhaba 🌿
>
> Rehberlik servisimiz, ara tatil için **{5./6./7.} sınıf** öğrencilerimize yönelik bir çalışma programı **önerisi** hazırladı. Bugün çocuklarımıza basılı olarak verdik. Derse gelemeyen öğrencilerimiz için de PDF hâlini buradan paylaşıyorum.
>
> Bu program bir zorunluluk değil, bir yol haritasıdır. İçinde deneme ya da saat zorunluluğu yok. Sayılar birer öneri, çocuğunuzun temposuna göre esnetebilirsiniz. İlk iki gün tamamen dinlenmeye ayrıldı.
>
> Sizden tek ricamız: Lütfen hedeflerin tamamını beklemeyin. Her gün biraz çalışması bizim için yeterli. Kâğıdın arkasındaki "Emek çizelgesi"ni çocuğunuz kendisi işaretlesin. Sonuçtan çok emeğini takdir etmeniz en büyük destek olacaktır.
>
> Koç öğretmenimizin verdiği tatil ödevleri varsa önce onlar tamamlanmalı. Tatil dönüşü çizelgeye koç öğretmenimizle birlikte bakacağız.
>
> Hepinize keyifli ve dinlendirici bir tatil dileriz.
> Odak Eğitim Rehberlik Servisi

## Koç grubu mesajı (5-6-7 koçları · yönlendirme, onay istemez)
> Değerli hocalarım,
> Ara tatil için 5, 6 ve 7. sınıflara yönelik çalışma programı önerimiz hazır. PDF'ler ekte, çıktılar Perşembe öğleden sonra sınıf sınıf ayrılmış olacak.
> Sizden ricam:
> 1. **Cuma son dersinizde** çıktıları dağıtın. Öğrenciler adlarını yazsın, takip çizelgesini 2 dakikada gösterin.
> 2. Kendi verdiğiniz tatil ödevi varsa öğrencilere "önce benim ödevim, kalan zamanda bu program" deyin. Program öneri niteliğinde.
> 3. Tatil dönüşü ilk raporda (**23-29 Kas** sekmesi) "Çizelge getirdi mi?" sütununa tatil çizelgesini girin.
> Teşekkürler 🙏 Rehberlik Birimi

## Instagram caption (ortaokul)
> Ara tatil yaklaşırken 5, 6 ve 7. sınıf öğrencilerimiz için bir çalışma programı önerisi hazırladık. 📌
> İlk 2 gün tam dinlenme, sonrasında her sabah düzenli, kısa ve planlı çalışma. Kartlarda süre, günlük soru miktarı ve her dersin nasıl çalışılacağı yer alıyor.
> Zorunlu değil, bir yol haritası. Çocuğunuzun temposuna göre uyarlayabilirsiniz.
> Kaydedin, tatil boyunca buzdolabına asın. 🙂
> #OdakEğitim #veliköşesi #aratatil #ortaokul #rehberlik
