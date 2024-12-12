const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    price: { type: Number, default: 0 },
    images: [{ type: String }],
    instructor: { type: String, required: true },
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    category: {type: String, required:true, default:"unspecified"}
});

module.exports = mongoose.model("Workshop", workshopSchema);