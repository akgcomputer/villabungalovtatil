// src/data/tur-fiyat.js

export const turFiyatlari = {
  // Umre Turları Fiyatları (SAR cinsinden)
  umre: {
    bireysel: {
      ekonomik: 1750,
      standart: 2400,
      konforlu: 3400,
      premium: 6400,
      ramazan: 'sorunuz',
      esnek: 'sorunuz'
    },
    jet: {
      ekonomik: 'sorunuz',
      standart: 'sorunuz',
      konforlu: 'sorunuz'
    },
    diger: {
      kadin: 'sorunuz',
      butik: 'sorunuz',
      kafile: 'sorunuz',
      luks: 'sorunuz',
      vip: 'sorunuz',
      araTatil: 'sorunuz',
      somestir: 'sorunuz'
    }
  },

  // Orta Doğu Turları (USD)
  ortadogu: {
    altinUcgen: 2499,
    katarMisir: 2899,
    dubai: 1899,
    umreVeDiger: 'sorunuz'
  },

  // Avrupa Turları (EUR)
  avrupa: {
    italyaRuyasi: 1599,
    ispanyaEndulus: 1799,
    portekizMalta: 2199,
    yunanAnakarasi: 899,
    klasikAvrupa: 1399,
    doguAvrupa: 1299
  },

  // Amerika Turları (USD)
  amerika: {
    megaKentler: 3299,
    kuba: 2399,
    newYork: 1899,
    florida: 2299,
    kaliforniya: 2599
  },

  // Uzak Doğu Turları (USD)
  uzakdogu: {
    singapurBangkok: 1999,
    taylandVietnamKambocya: 2899,
    japonya: 3299,
    guneyKore: 2799,
    cin: 2599
  },

  // Rusya Turları (EUR)
  rusya: {
    ikiBaskent: 1499,
    moskova: 899,
    stPetersburg: 899,
    transSibirya: 3299
  },

  // Yunan Adaları Turları (EUR)
  yunanAdalari: {
    onikiAdalar: 1299,
    kuzeyEge: 999,
    mikonosSantorini: 1499,
    girit: 1099
  },

  // Balkan Turları (EUR)
  balkan: {
    klasikBalkan: 699,
    yunanistanBalkan: 799,
    hırvatistan: 899,
    karadag: 749,
    sirbistanBosna: 649
  },

  // Afrika Turları (USD)
  afrika: {
    safariKlasik: 1899,
    safariLux: 2899,
    misir: 1399,
    fas: 1299,
    guneyAfrika: 2199
  },

  // Körfez Turları (USD)
  korfez: {
    dubaiVip: 2499,
    katar: 1999,
    bae: 1799,
    umman: 1599
  },

  // Gemi Turları (EUR)
  gemi: {
    akdeniz: 899,
    karayipler: 2499,
    norvec: 1899,
    yunanAdalari: 1299,
    dubai: 1799
  },

  // Kültür Turları (EUR)
  kultur: {
    italya: 1599,
    ispanya: 1699,
    yunanistan: 1199,
    misir: 1399,
    hindistan: 1799
  }
};

// Güncel kurlar
export const kurlar = {
  sar: 10.50,  // 1 SAR = 10.50 TL
  eur: 35.00,  // 1 EUR = 35.00 TL
  usd: 32.00   // 1 USD = 32.00 TL
};

// WhatsApp numarası
export const whatsappNumara = '905551234567';