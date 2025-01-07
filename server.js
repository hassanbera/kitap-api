const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./config/swaggerOptions'); // swaggerOptions'ı içe aktar

const app = express();
const port = 3000;

app.use(express.json());

// Dummy kitap listesi
let kitaplar = [
  { id: 1, isim: 'Savaş ve Barış', yazar: 'Tolstoy' },
  { id: 2, isim: 'Suç ve Ceza', yazar: 'Dostoyevski' },
  { id: 3, isim: 'İnce Memed', yazar: 'Yaşar Kemal' }
];

// Swagger dokümantasyonu
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Belirli bir kitabı ID ile getir (GET /kitaplar/:id)
app.get('/kitaplar/:id', (req, res) => {
  const { id } = req.params;
  const kitap = kitaplar.find(k => k.id === parseInt(id));

  if (!kitap) {
    return res.status(404).json({ mesaj: 'Kitap bulunamadı' });
  }

  res.json(kitap);
});

// Yeni kitap ekle (POST /kitaplar)
app.post('/kitaplar', (req, res) => {
  const { isim, yazar } = req.body;

  if (!isim || !yazar) {
    return res.status(400).json({ mesaj: 'Kitap ismi ve yazar bilgisi gerekli' });
  }

  const yeniKitap = {
    id: kitaplar.length + 1,
    isim,
    yazar
  };

  kitaplar.push(yeniKitap);
  res.status(201).json(yeniKitap);
});

// Dummy yazar listesi
let yazarlar = [
  { id: 1, isim: 'Tolstoy', kitap: 'Savaş ve Barış' },
  { id: 2, isim: 'Dostoyevski', kitap: 'Suç ve Ceza' },
  { id: 3, isim: 'Yaşar Kemal', kitap: 'İnce Memed' }
];

// Tüm yazarları listele (GET /yazarlar)
app.get('/yazarlar', (req, res) => {
  res.json(yazarlar);
});

// Belirli bir yazarı ID ile getir (GET /yazarlar/:id)
app.get('/yazarlar/:id', (req, res) => {
  const { id } = req.params;
  const yazar = yazarlar.find(y => y.id === parseInt(id));

  if (!yazar) {
    return res.status(404).json({ mesaj: 'Yazar bulunamadı' });
  }

  res.json(yazar);
});

// Yeni yazar ekle (POST /yazarlar)
app.post('/yazarlar', (req, res) => {
  const { isim, kitap } = req.body;

  if (!isim || !kitap) {
    return res.status(400).json({ mesaj: 'Yazar ismi ve yazdığı kitap gerekli' });
  }

  const yeniYazar = {
    id: yazarlar.length + 1,
    isim,
    kitap
  };

  yazarlar.push(yeniYazar);
  res.status(201).json(yeniYazar);
});

// Ana sayfa endpoint'i
app.get('/', (req, res) => {
  res.send('Swagger Dokümantasyonu için /api-docs adresine gidin');
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
