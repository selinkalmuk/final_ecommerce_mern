const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv= require('dotenv');

dotenv.config(); //Loading .env file

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); // JSON verilerini işlemek için


// EJS Template Engine Setting
app.set('view engine', 'ejs');
app.set("views", "./views"); // views klasörünü tanımla.

//////////
// Route dosyalarını import etme
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const orderRoutes = require('./routes/orderRoutes');

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB bağlantısı başarılı!'))
.catch(err => console.error('MongoDB bağlantı hatası:', err));

// Basic GET endpoint
app.get('/', (req, res)=>{
    res.send('Art E-commerce Backend API');
});
//////
// Route'ları tanımlama
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/workshops', workshopRoutes);
app.use('/orders', orderRoutes);



// Start application
app.listen(PORT , ()=>{
    console.log(`Server is started and ${PORT} is listening.`);
});
