const Order = require('../models/Order');

// Yeni sipariş oluşturur.
const createOrder = async (req, res) => {
    try {
        const{userId, products, shippingAddress, paymentMethod} = req.body;

        // Toplam tutarı hesapla
        const totalAmount = products.reduce((total, item)=> total + item.price*item.quantity, 0);
        const newOrder = new Order({
            userId,
            products,
            totalAmount,
            shippingAddress,
            paymentMethod,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
        
    } catch (error) {
        res.status(500).json({error: "Sipariş oluşturulamadı."});
    }
};
// Tüm siparişleri getirir.
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('products.productId');
        if(orders.length === 0){
            return res.status(404).json({message:"No orders found."});
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({error: "Siparişler getirilemedi."});
    }
};
// Belirli bir kullanıcıya ait tüm siparişleri getirir.
const getUserOrders = async (req, res) => {
    try {
        const userId = req.params.id;
        const orders = await Order.find({userId}).populate('products.productId');
        if(orders.length === 0){
            return res.status(404).json({message:"Specified user orders doesnt have.", orders:[]});
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({error: "Kullanıcı siparişleri bulunamadı."});
    }
}; 
// Belirli bir siparişi günceller.
const updateOrder = async (req, res) => {
    try {
        const updates = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, updates, {new:true}).populate('products.productId');
        if(!updatedOrder){
            return res.status(404).json({message:"No order found."});
        }
        res.status(200).json(updatedOrder);
        
    } catch (error) {
        res.status(500).json({error: "Sipariş güncellenemedi."});
    }
};
// Belirli bir siparişi siler.
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if(!deletedOrder){
            return res.status(404).json({message:"No order found."});
        }
        res.status(200).json({message:"Order deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Sipariş silinemedi."});
    }
};
// Siparişin durumunu günceller.
const updateOrderStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {status}, {new:true}).populate('products.productId');
        if(!updatedOrder){
            return res.status(404).json({message:"No order found."});
        }
        res.status(200).json(updatedOrder);
        
    } catch (error) {
        res.status(500).json({error: "Sipariş güncellenemedi."});
    }
}; 


module.exports = {createOrder, getAllOrders, getUserOrders, updateOrder, deleteOrder, updateOrderStatus};