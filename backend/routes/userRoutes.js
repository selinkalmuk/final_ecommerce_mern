const express = require('express');
const router = express.Router();
const { getAllUsers, createUser,loginUser, getUserById, updateUser, deleteUser, getUserByType } = require('../controllers/userController');


// Kullanıcıları listeleme endpoint'i
router.get('/', getAllUsers);
// Belirli bir kullanıcıyı alma endpointi
router.get('/:id', getUserById);
// Kullanıcı tipine göre kullanıcıları alma
router.get('/type/:type', getUserByType);
// Kullanıcı oluşturma
router.post('/', createUser);
// Kullanıcı güncelleme
router.put('/:id', updateUser);
//Kullanıcı silme
router.delete('/:id', deleteUser); 
// Kullanıcı girişi
router.post('/login', loginUser);




module.exports = router;
