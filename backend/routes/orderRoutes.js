const express = require('express');
const router = express.Router();
const {
    createOrder, getAllOrders, getUserOrders, updateOrder, deleteOrder, updateOrderStatus
} = require('../controllers/orderController');

// Sipariş oluşturma
router.post('/', createOrder);
// Tüm siparişleri alma
router.get('/', getAllOrders);
// Belirli kullanıcının siparişlerini alma
router.get('/user/:id', getUserOrders);
// Sipariş güncelleme
router.put('/:id', updateOrder);
// Sipariş silme
router.delete('/:id', deleteOrder);
// Siparişin durumunu güncelleme
router.put('/status/:id', updateOrderStatus);

module.exports = router;