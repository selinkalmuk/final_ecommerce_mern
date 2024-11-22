const dotenv = require('dotenv');
dotenv.config(); // .env dosyasını yükler

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Workshop = require('../models/Workshop'); // Workshop modelini uygun yoldan import edin

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/artDB", { serverSelectionTimeoutMS: 50000 })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// Sahte workshop verileri oluşturacak fonksiyon
const generateFakeWorkshops = async () => {
  const fakeWorkshops = [];

  for (let i = 0; i < 20; i++) {
    const workshop = {
      title: faker.commerce.productName(),  // Workshop başlığı
      description: faker.lorem.paragraph(),  // Açıklama
      date: faker.date.future(),  // Gelecek bir tarih
      location: faker.location.city(),  // Konum
      capacity: faker.helpers.rangeToNumber({ min: 10, max: 100 }),  // Katılımcı kapasitesi
      price: parseFloat(faker.commerce.price()),  // Fiyat
      images: [faker.image.urlPicsumPhotos(), faker.image.urlPicsumPhotos()],
      instructor: faker.person.fullName(),  // Eğitmenin adı
      instructorId:  new mongoose.Types.ObjectId(),  // Geçici bir ObjectId
      registeredUsers: [],  // Başlangıçta hiçbir kullanıcı kayıtlı değil
    };

    fakeWorkshops.push(workshop);
  }

  // Sahte workshop'ları MongoDB'ye kaydet
  try {
    await Workshop.insertMany(fakeWorkshops);
    console.log('Fake workshops created successfully!');
  } catch (error) {
    console.error('Error creating fake workshops:', error);
  }
};

// Sahte workshop'ları oluştur
generateFakeWorkshops();
