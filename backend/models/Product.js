const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    images: [{ type: String }],
    createdAt: { type: Date, default: Date.now},
    artistId: { type: String, required: false},
    artistName: {type:String, required: true},
    sellerId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}, // Satan kullanıcının id si alın
    material: {type: String},
    dimensions: {
        width: { type: Number, required:false },
        height: { type: Number, required:false },
        depth: { type: Number, required:false }
    }
});

module.exports = mongoose.model('Product', productSchema);