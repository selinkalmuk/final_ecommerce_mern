const Product = require('../models/Product');

// Yeni bir ürün oluşturur.
const createProduct = async (req, res) =>{
    try {
        // Get all parameters
        const {
            name,
            description,
            category,
            price,
            stock,
            images,
            createdAt,
            artistId,
            artistName,
            sellerId,
            material,
            dimensions
        } = req.body;

        // Required: true fields check
        if(!name || !category || !sellerId) return res.status(404).json({error:"Product name, category and seller fields are mandatory to fill."});

        const newProduct = new Product ({
            name,
            description,
            category,
            price,
            stock,
            images,
            createdAt,
            artistId,
            artistName,
            sellerId,
            material,
            dimensions
        });
        // Save new product to the db
        await newProduct.save();
        // Return saved new product
        return res.status(201).json(newProduct);
        
    } catch (error) {
        return res.status(500).json({error: "New product creation failed."});
    }
};

// Tüm ürünleri getirir.
const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        if(products.length === 0){
            return res.status(200).json({message:"No product found.", products:[]});
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({error: "Ürünler getirilirken hata oluştu."});
    }
};

// Belirli bir ürünü getirir.
const getProductById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product not found "});
        }
        return res.status(200).json(product);
        
    } catch (error) {
        return res.status(500).json({error: "Ürün getirilemedi."});
    }
};

// Belirli bir ürünü günceller.
const updateProduct = async (req, res) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,  // Contains the updated fields
            {new: true, runValidators: true} // Returns the updated user and applies schema validations
        );
        if(!updatedProduct){
            return res.status(404).json({error:"Product not found"});
        }
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({error: "Ürün güncellenemedi"});
    }
};

// Belirli bir ürünü siler.
const deleteProduct = async (req, res) =>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({error:"Product didnt found."});
        }
        return res.status(200).json({message: "Product deleted successfully."});

    } catch (error) {
        return res.status(500).json({error: "Ürün silinemedi"});
    }
};

// Belirli bir sanatçıya ait ürünleri getirir.
const getProductsByArtist = async (req, res) =>{
    try {
        const artistId = req.params.artistId;
        const products = await Product.find({artistId});
        if(products.length === 0){
            return res.status(404).json({error: "Artist products didnt find."});
        }
        return res.status(200).json({products});
        
    } catch (error) {
        return res.status(500).json({error: "Sanatçının ürünleri bulunamadı."});
    }
};
// Belirli bir sanatçıya ait ürünleri getirir.
const getProductsByCategory = async (req, res) =>{
    try {
        const category = req.params.category;
        const products = await Product.find({category});
        if(products.length === 0){
            return res.status(404).json({error: "Category products didnt find."});
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({error: "Kategori ürünleri bulunamadı"});
    }
};

module.exports = {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getProductsByArtist, getProductsByCategory};