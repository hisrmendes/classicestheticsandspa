// ===============================
// Classic Esthetics & Spa - Backend (CommonJS version)
// ===============================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// ===============================
// Configuração do servidor
// ===============================
const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// Configuração de uploads (fotos)
// ===============================
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// ===============================
// Conexão com MongoDB
// ===============================
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/classicdb";

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB conectado com sucesso'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// ===============================
// Rotas principais
// ===============================

// Teste básico
app.get('/', (req, res) => res.json({ ok: true, message: 'Classic backend running' }));

// Upload de fotos
app.post('/api/uploads', upload.array('photos', 10), (req, res) => {
  const files = (req.files || []).map(f => ({
    filename: f.filename,
    url: '/uploads/' + f.filename
  }));
  res.json({ ok: true, urls: files.map(f => f.url) });
});

// Exposição das fotos
app.use('/uploads', express.static(UPLOAD_DIR));

// Produtos (stub temporário)
app.get('/api/products', (req, res) => {
  res.json({ products: [] });
});

// ===============================
// Inicialização do servidor
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
