const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products :[
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
        },  
    ],
    workshops: [
        {
            workshopId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Workshop",
                required:true,
            }
        }
    ],
    createdAt: {
            type:Date,
            default: Date.now,
    },
    updatedAt: {
            type: Date,
            default: Date.now
    },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;