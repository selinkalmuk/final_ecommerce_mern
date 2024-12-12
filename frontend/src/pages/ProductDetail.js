import React, { useEffect, useState } from "react";
import "../assets/styles/productdetail.css";
import ArtistInfo from '../components/ArtistInfo';
import { useParams } from "react-router-dom";
import axios from 'axios';
const ProductDetail = () =>{
    const {id} = useParams();
    const[product, setProduct] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser =localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }

        const fetchProduct = async() => {

            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`)
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details.');
                
            }
        };

        fetchProduct();
    }, [id]);

    if(!product){
        return <div>Loading...</div>;
    }

    const handleAddToCart = async() => {
        if(!user){
            alert('Please Login First');
        }
        console.log("Added to cart", product.name);
        const response = await axios.post('http://localhost:5000/cart/add-product',  {
            userId: user._id,
            productId: product._id,
            quantity: 1
        });
        console.log(response.data);
        if(response){
            alert("added to cart");
        }
        
    }
    const handleBuyNow = () => {
        console.log("Proceed to buy now" , product.name);
    }

    return (
        <div className="product-page">
            
                <div className="product-details">
                    <div className="img-box">
                        <img className="product-img" src={product.images[0]} alt="artwork" />
                    </div>
                <div className="product-info-page">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="product-material">{product.category}</div>
                    <div className="product-dimensions">
                        <span className="width">{product.dimensions.width}cm</span> x
                        <span className="height">{product.dimensions.height}cm</span> x
                        <span className="depth">{product.dimensions.depth}cm</span>
                    </div>
                    <div className="product-stock">{product.stock > 0 ? "In Stock" : "Out of Stock"}</div>
                    <div className="artist-id">{product.artistId || "N/A"} </div>
                    <div className="seller-name">{product.sellerId || "N/A"}</div>
                    <div className="product-category">{product.category || "N/A"}</div>
                        <p className="artist-name">By {product.artistName || "Unknown Artist"}</p>
              
                    <div className="product-price">
                        {product.price ? `$${product.price.toFixed(2)}` : "Price: N/A"}
                    </div>
              
              {/* Add to Cart and Buy Now buttons */}
                    <div className="product-actions">
                        <div className="add-to-cart-div" onClick={handleAddToCart} >
                            Add to Cart
                        </div>
                        <div className="buy-now-div" onClick={handleBuyNow}>
                            Buy Now
                        </div>
                    </div>
                </div>
        
            <div className="description-div">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description-div">
              {product.description || "No description available for this product."}
            </p>
            </div>
            <ArtistInfo />
          </div>
        </div>
      );
}

export default ProductDetail;

