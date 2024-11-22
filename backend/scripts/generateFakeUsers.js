const dotenv = require('dotenv');
dotenv.config(); // .env dosyasını yükler

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const User = require('../models/User'); // User modelini uygun yoldan import edin

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/artDB", { serverSelectionTimeoutMS: 50000 })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// Sahte kullanıcı verileri oluşturacak fonksiyon
const generateFakeUsers = async () => {
  const fakeUsers = [];

  for (let i = 0; i < 50; i++) {
    const user = {
      username: faker.internet.username(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),  // Her kullanıcı için rastgele bir şifre oluşturur
      profilePicture: faker.image.avatar(),
      role: faker.helpers.arrayElement(['user', 'admin']),
      userType: faker.helpers.arrayElement(['normal', 'artist', 'collector']),
      bio: faker.lorem.paragraph(),
      socialLinks: {
        instagram: faker.internet.url(),
        twitter: faker.internet.url(),
        website: faker.internet.url(),
      },
      createdAt: faker.date.past(),
    };

    fakeUsers.push(user);
  }

  // Sahte kullanıcıları MongoDB'ye kaydet
  try {
    await User.insertMany(fakeUsers);
    console.log('Fake users created successfully!');
  } catch (error) {
    console.error('Error creating fake users:', error);
  }
};

// Sahte kullanıcıları oluştur
generateFakeUsers();
