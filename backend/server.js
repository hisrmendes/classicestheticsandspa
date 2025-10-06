require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const multer = require('multer')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

const UPLOAD_DIR = path.join(__dirname, 'uploads')
if(!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR)
const storage = multer.diskStorage({destination:(req,file,cb)=>cb(null,UPLOAD_DIR),filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)})
const upload = multer({storage})

// MongoDB connection (local)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/classicestheticsspa'
mongoose.connect(MONGO_URI).then(()=>console.log('Mongo connected')).catch(e=>console.error(e))

// simple health
app.get('/',(req,res)=>res.json({ok:true,message:'Classic backend running'}))
// uploads
app.post('/api/uploads', upload.array('photos',10), (req,res)=>{
  const files = (req.files||[]).map(f=>({filename:f.filename,url:'/uploads/'+f.filename}))
  res.json({ok:true,urls:files.map(f=>f.url)})
})
app.use('/uploads', express.static(UPLOAD_DIR))

// stub: products
app.get('/api/products',(req,res)=>{
  res.json({products:[]})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log('Server listening on',PORT))
