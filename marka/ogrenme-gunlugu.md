# Öğrenme Günlüğü

Kullanıcının her düzeltmesi buraya bir **kural** olarak yazılır. Claude yeni bir iş öncesinde bu dosyayı okur
ve buradaki kuralları `marka-dili.md` dosyasından önce uygular.

Biçim:

```
## YYYY-AA-GG · <kısa başlık>
- Neydi: <Claude ne önerdi>
- Düzeltme: <kullanıcı ne dedi>
- Kural: <bundan sonra hep uygulanacak tek cümle>
- Kapsam: post | koçluk | veli mesajı | genel
```

---

## 2026-11-08 · Başlangıç
- Neydi: Sistem kuruldu, marka dili taslak olarak yazıldı.
- Düzeltme: Kullanıcı "taslakla başla, düzelteyim" dedi.
- Kural: Belirsiz bir üslup kararında iki seçenek sun ve kullanıcının seçimini buraya yaz.
- Kapsam: genel

## 2026-11-08 · Tatil postunda geri sayım
- Neydi: Ara tatilin ilk günündeki duyuru postuna küçük puntoyla "LGS'ye 211 gün" yazıldı. Denetçi, bunun baskı gibi okunabileceğini söyledi.
- Düzeltme: Kullanıcı "mantıklı" dedi, geri sayım kalıyor.
- Kural: Tatil duyurularında sınav geri sayımı kullanılabilir. Ana mesaj tatil olur, geri sayım küçük puntoyla yer alır.
- Kapsam: post

## 2026-11-08 · Merkezî planlama, koça danışma yok
- Neydi: Tatil postundaki çalışma sürelerinin yayından önce koçlara sorulması önerildi.
- Düzeltme: Kullanıcı şöyle dedi: "Çok fazla öğretmen var, hepsiyle bu kadar iletişime geçemem. Ben takip edeyim, öğretmenleri yönlendireyim. Koçlar görev olarak yapıyor. Planlamayı rehberlik olarak ben yaparım."
- Kural: Planlar rehberlik biriminden merkezî olarak çıkar. Koçlara onay sorulmaz, hazır ve adım adım yönlendirme gönderilir. Koçtan yorum ya da karar bekleyen bir süreç önerilmez.
- Kapsam: genel

## 2026-11-08 · Velilerin sevdiği format
- Neydi: Tek bir genel "tatil planı" carousel'i önerildi.
- Düzeltme: Kullanıcı kademe bazlı (5, 6, 7… ayrı ayrı), konu bazlı olmayan, saat, miktar ve ders ders "nasıl çalışılır" içeren, şık bir program istedi. Bu program veli WhatsApp gruplarına da gönderilecek. Kullanıcı "Veliler onu seviyor" dedi.
- Kural: Tatil, sınav dönemi ve karne gibi dönemlerde varsayılan içerik, kademe bazlı rehberlik programıdır (görsel kart + veli grubu mesajı + koç yönlendirmesi). Öğrenci adı ve konu listesi içermez.
- Kapsam: post | veli mesajı

## 2026-11-08 · Ödev miktarları düşük kalmasın
- Neydi: Ara tatil programında 5. sınıfa "5 paragraf", LGS'ye günde ~120 soru önerildi.
- Düzeltme: Kullanıcı "Çok az, biz çocuklara çok daha fazla ödev veriyoruz. Eksik gibi olur." dedi.
- Kural: Çalışma programlarında soru miktarları piyasa aralığının **üst bandından** seçilir (ör. LGS günde ~240, 5. sınıf ~100). Tatil, kamp gibi değerlendirilir. Kurumun gerçek ödev verisi (rapordaki V satırı) oluştukça sayılar o veriye göre kalibre edilir.
- Kapsam: post | koçluk

## 2026-11-08 · Programlar zorunluluk değil, öneri
- Neydi: Program kartları ve mesajlar emir kipinde, "uygulanacak program" tonundaydı.
- Düzeltme: Kullanıcı "Tamamen öneri, illa bu şekilde çalışmak zorunda değiller" dedi.
- Kural: Rehberlik programları veliye ve öğrenciye **öneri / yol haritası** olarak sunulur. Koçun verdiği ödev önceliklidir ve bu her kartta dipnot olarak yazılır. Veli mesajında "çocuğunuzun temposuna göre esnetebilirsiniz" vurgusu yer alır.
- Kapsam: post | veli mesajı

## 2026-11-08 · Basılı çıktı + dağıtım sırası
- Neydi: Program sadece dijital olarak (WhatsApp ve Instagram) planlanmıştı.
- Düzeltme: Kullanıcı öğrencilere çıktı olarak da verilmesini önerdi.
- Kural: Ortaokul programları A4 çıktı olarak da hazırlanır (ad-soyad ve takip çizelgesi alanlı). Önce öğrenciye çıktı verilir, aynı akşam veli grubuna mesaj gider.
- Kapsam: genel

## 2026-11-08 · Kalibrasyon: LGS soru sayısı
- Kaynak: Bir LGS koçunun rapor notunda "günlük 200-250 civarında soru bekliyorum" yazıyor.
- Kural: LGS programlarında günlük ~200-250 soru, kurumun kendi beklentisidir. Ara tatil kartındaki ~240 bununla tutarlı.
- Kapsam: koçluk | post

## 2026-11-13 · 6. sınıf ara tatil miktarları
- Neydi: 6. sınıf için günlük Matematik 40 soru, Türkçe 25 paragraf.
- Düzeltme: Kullanıcı "6. sınıfları 25 matematik, 20 paragraf yapalım" dedi.
- Kural: 6. sınıf ara tatil hedefi günlük Matematik 25 soru, Türkçe 20 paragraf (+15 dil bilgisi). Kademeler arası miktarlar karşılaştırılırken bu değer referans alınır.
- Kapsam: koçluk | program

## 2026-11-13 · Kademeler arası tutarlılık
- Neydi: 6. sınıf düşürülünce 5. sınıf (30 mat, 20 paragraf) 6. sınıftan fazla kaldı.
- Düzeltme: Kullanıcı denetçi önerisini kabul etti: 5. sınıf 20 matematik, 15 paragraf.
- Kural: Programlarda günlük miktarlar kademeyle **artar** (5 < 6 < 7 < 8). Bir kademe değişince komşu kademeler de kontrol edilir.
- Kapsam: program

## 2026-11-13 · 7. sınıfta kaygı: yük ve ton düşürüldü
- Neydi: 7. sınıf günlük 50 matematik ve 30 paragraf, prova günü süre tutarak 90 soru, not "LGS'nin provası".
- Düzeltme: Kullanıcı şöyle dedi: "7'leri de biraz düşürelim, çocuklarımın kaygısı çok arttı, ağladılar."
- Kural: 7. sınıf ve altı için programlarda **kaygı artırıcı dil kullanılmaz** ("LGS provası", süre baskısı, büyük sayılar). Prova günü süre tutmadan, "amaç puan değil, eksik görmek" çerçevesiyle verilir. Velimize notta çaba takdiri vurgulanır. 7. sınıf: Matematik 35, Türkçe 25 paragraf.
- Kapsam: program | veli mesajı | post

## 2026-11-13 · Ortaokulda deneme ve saat dayatması yok
- Neydi: Tatil programında 21 Kasım "prova günü" (mini deneme) olarak planlanmıştı. Kurallarda "en geç 09:30'da masada" ve akışta saat saat bir plan vardı.
- Düzeltme: Kullanıcı "Denemeyi de silelim, en geç kaçta uyanacağız yazmayalım" dedi (7. sınıfta kaygı ve ağlama sonrası).
- Kural: Ortaokul (5-6-7) tatil programlarında deneme yoktur, yerine "tekrar günü" (yeni soru yok) konur. Saat dayatılmaz. Akış "1. çalışma, mola…" sırasıyla verilir, başlangıç saatini öğrenci seçer.
- Kapsam: program | post

## 2026-11-13 · Kaygıyı azaltan program dili (ortaokul)
- Neydi: Tek sayı halinde "hedef", "takip çizelgesi", koç kontrolünde "hedefin %70'i", "nasıl çalışmalı?" komut dili.
- Düzeltme: Kullanıcı "Kaygıyı azaltacak şekilde olsun lütfen, çocuklar çok üzüldü, ben de" dedi.
- Kural: Ortaokul programlarında:
  - Sayılar **aralık** olarak verilir (ör. 20-25 soru), "hedef" yerine "öneri" yazılır.
  - Takip tablosunun adı "Emek çizelgesi"dir: ✓ işareti yeterli, soru sayısı isteğe bağlıdır. Bir "Bugün nasıldım?" satırı bulunur.
  - Yüzdelik başarı ölçütü kullanılmaz. Koç kontrolü "emeği takdir edildi" çerçevesindedir.
  - Her belgede "Zorlandığında ne yapabilirim?" kutusu (nefes, mola, anlat, yarın yeni gün) yer alır.
  - Kural 4 "Kendine nazik ol" olur.
- Kapsam: program | veli mesajı | post
