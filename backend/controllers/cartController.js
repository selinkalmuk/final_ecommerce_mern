const Cart= require("../models/Cart"); 
const Product= require("../models/Product"); 
const Workshop= require("../models/Workshop"); 

const getCart= async(req, res) => {
    try{
        const cart = await Cart.findOne({ userId: req.params.userId })
        .populate("products.productId")
        .populate("workshops.workshopId");
        
        if(!cart) {
            return res.status(404).json({message: "There is no cart."});
        }
        res.json(cart);
    }catch (error) {
        res.status(500).json({message: "Server Error", error});
    }
};

const addProductToCart = async (req, res) =>{
    const { userId, productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: "Product not found."});
        }
        let cart = await Cart.findOne({ userId });
        if(!cart) {
            cart = new Cart({userId, products: [], workshops: []});
        }

        //is there same product in cart
        const productIndex = cart.products.findIndex(
            (item) => item.productId.toString() === productId
        );

        if(productIndex > -1) {
            // Count ++
            cart.products[productIndex].quantity += 1;
        }else{
            cart.products.push({ productId, quantity});
        }
        await cart.save();
        res.json({message:"Successfully product added to cart", cart});

    } catch (error) {
        res.status(500).json({message:"Server Error", error});
    }
}

// Sepete workshop ekle
const addWorkshopToCart = async (req, res) => {
    const { userId, workshopId } = req.body;
  
    try {
      // Workshop mevcut mu kontrol et
      const workshop = await Workshop.findById(workshopId);
      if (!workshop) {
        return res.status(404).json({ message: "Workshop bulunamadı." });
      }
  
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        // Kullanıcının sepeti yoksa oluştur
        cart = new Cart({ userId, products: [], workshops: [] });
      }
  
      // Sepette aynı workshop var mı kontrol et
      const workshopIndex = cart.workshops.findIndex(
        (item) => item.workshopId.toString() === workshopId
      );
  
   
        cart.workshops.push({ workshopId });
      
  
      await cart.save();
      res.json({ message: "Workshop added to cart successfully.", cart });
    } catch (error) {
      res.status(500).json({ message: "Server error.", error });
    }
  };

const removeProductFromCart = async (req, res) => {
    const { userId, productId } = req.body;
  
    try {
      const cart = await Cart.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ message: "Sepet bulunamadı." });
      }
  
      cart.products = cart.products.filter(
        (item) => item.productId.toString() !== productId
      );
  
      await cart.save();
      res.json({ message: "Product deleted from cart successfully.", cart });
    } catch (error) {
      res.status(500).json({ message: "Server error .", error });
    }
  };
  
  const removeWorkshopFromCart = async (req, res) => {
    const { userId, workshopId } = req.body;
  
    try {
      const cart = await Cart.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ message: "Sepet bulunamadı." });
      }
  
      cart.workshops = cart.workshops.filter(
        (item) => item.workshopId.toString() !== workshopId
      );
  
      await cart.save();
      res.json({ message: "Workshop deleted from cart successfully ", cart });
    } catch (error) {
      res.status(500).json({ message: "Server error.", error });
    }
  };


module.exports = {getCart, addProductToCart, addWorkshopToCart, removeProductFromCart, removeWorkshopFromCart };