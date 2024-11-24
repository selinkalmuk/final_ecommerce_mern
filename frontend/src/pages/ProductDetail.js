import React, { useEffect, useState } from "react";
import "../assets/styles/productdetail.css";
import ArtistInfo from '../components/ArtistInfo';
import { useParams } from "react-router-dom";
import axios from 'axios';
const ProductDetail = () =>{
    const {id} = useParams();
    const[product, setProduct] = useState(null);

    useEffect(() => {
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

    return (
        
    <div className="product-page">
    <div className="product-details">
    <img className="product-img" src={product.images[0]} alt="artwork" />
        <div className="product-info">
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
          
            <div className="product-price">{product.price ? `$${product.price.toFixed(2)}` : "Price: N/A"}</div>
        </div>
        <p className="product-description">
        {product.description || "No description available for this product."}
        </p>
        <hr/>
        <ArtistInfo />
        </div>
    
    </div>
    


    );
}

export default ProductDetail;

