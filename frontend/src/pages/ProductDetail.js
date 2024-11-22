import React from "react";
import "../assets/styles/productdetail.css";
import ArtistInfo from '../components/ArtistInfo';

const ProductDetail = () =>{

    return (
        
    <div class="product-page">
    <div class="product-details">
    <img className="product-img" src="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" alt="artwork" />
        <div class="product-info">
            <h1 class="product-title">Product Name</h1>
            <div className="product-material">oil painting</div>
            <div className="product-dimensions">
                    <span className="width">30cm</span> x 
                    <span className="height">40cm</span> x 
                    <span className="depth">3cm</span> 
            </div>
            <div className="product-stock">Unique</div>
           
            <div className="artist-id">Artist id </div>
            <div className="seller-name">Lorem Ipsum</div>
            <div className="product-category">category</div>
            <p class="artist-name">By John Doe</p>
          
            <div class="product-price">$99.99</div>
        </div>
        <p class="product-description">
                This amazing product is crafted with the finest materials, offering a combination of functionality and style. Perfect for everyday use or special occasions.
                The durable design ensures it stands the test of time, making it a must-have for anyone looking to enhance their collection.
        </p>
        <hr/>
        <ArtistInfo />
        </div>
    
    </div>
    


    );
}

export default ProductDetail;

