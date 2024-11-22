const express = require('express');
const router = express.Router();
const {
    createProduct,
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct, 
    getProductsByArtist, 
    getProductsByCategory
} = require('../controllers/productController');

// Ürün oluşturma
router.post('/', createProduct);
// Ürünleri listeleme
router.get('/', getAllProducts);
// Belirli ürünü alma
router.get('/:id', getProductById);
// Belirli ürünü güncelleme
router.put('/:id', updateProduct);
// Ürün silme
router.delete('/:id', deleteProduct);
// Sanatçıya göre ürün alma
router.get('/artist/:artistId', getProductsByArtist);
// Kategoriye göre ürün alma
router.get('/category/:category', getProductsByCategory);

module.exports = router;

