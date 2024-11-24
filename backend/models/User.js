const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String},
    name: { type:String},
    email: { type: String, required: true, unique: true },
    password: { type: String , required: function(){ return !this.googleId && !this.facebookId; }},
    googleId: {type: String, unique: true, sparse: true},
    facebookId: {type: String, unique: true, sparse: true},
    profilePicture: { type: String },
    role: { type: String, enum:['user','admin'], default: 'user' },
    userType: { type: String, enum: ['normal', 'artist', 'collector'], default:'normal' },
    bio: { type: String },
    portfolio: [{ type:String }], //Kullanıcının eserleri
    socialLinks: {
        instagram: { type:String },
        twitter: { type:String },
        website: { type:String },
    },
    createdAt:{ type:Date , default: Date.now}, // Hesap oluşturulma tarihi
});

module.exports = mongoose.model('User', userSchema);
