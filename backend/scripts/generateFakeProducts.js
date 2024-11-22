const dotenv= require('dotenv');

dotenv.config(); //Loading .env file

const mongoose = require('mongoose');
const {faker} = require('@faker-js/faker');
const Product = require('../models/Product');  // Product modelini uygun yoldan import edin

// Bağlantıyı oluştur
mongoose.connect("mongodb://localhost:27017/artDB", { serverSelectionTimeoutMS: 50000 })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// 20 tane sahte ürün oluşturacak fonksiyon
const generateFakeProducts = async () => {
  const fakeProducts = [];

  for (let i = 0; i < 20; i++) {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      price: parseFloat(faker.commerce.price()),
      stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      images: [faker.image.urlPicsumPhotos(), faker.image.urlPicsumPhotos()],
      createdAt: faker.date.recent(),
      artistName: faker.person.fullName(),
      sellerId: faker.database.mongodbObjectId(),  // Kullanıcı id'si için geçici bir ObjectId
      material: faker.commerce.productMaterial(),
      dimensions: {
        width: parseFloat(faker.helpers.rangeToNumber({ min: 20, max: 100 }).toFixed(1)),  // 20-100 arasında ondalıklı sayı
        height: parseFloat(faker.helpers.rangeToNumber({ min: 30, max: 200 }).toFixed(1)), // 30-200 arasında ondalıklı sayı
        depth: parseFloat(faker.helpers.rangeToNumber({ min: 5, max: 50 }).toFixed(1)),   // 5-50 arasında ondalıklı sayı
      }

    };

    fakeProducts.push(product);
  }

  // Ürünleri MongoDB'ye kaydet
  try {
    await Product.insertMany(fakeProducts);
    console.log('Fake products created successfully!');
  } catch (error) {
    console.error('Error creating fake products:', error);
  }
};

// Sahte ürünleri oluştur
generateFakeProducts();
