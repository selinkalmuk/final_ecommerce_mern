import React from "react";
import "../assets/styles/productdetail.css";
import ArtistInfo from '../components/ArtistInfo';

const WorkshopDetail = () =>{

    return (
        
    <div class="product-page">
    <div class="product-details">
    <img className="product-img" src="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" alt="artwork" />
        <div class="product-info">
            <h1 class="product-title">Workshop Name</h1>
            <div className="product-material">Category of Workshop</div>
            <div className="product-dimensions">
                Instructor Name
            </div>
            <div className="product-stock">20.11.2024 - 11:00 am</div>
           
            <div className="artist-id">Istanbul</div>
            <div className="seller-name">12 person is joining</div>
            <div className="product-category">category</div>
            <p class="artist-name">By John Doe</p>
            <div className="workshop-price">$15.00</div>
            <div class="product-price">Join Workshop</div>
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

export default WorkshopDetail;