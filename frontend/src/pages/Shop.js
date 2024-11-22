import React from "react";
import ProductCard from "../components/ProductCard";
const ShopPage = () => {

    const pageTitle = "Shop";
    return(
        <div className="shop-page">
            <div className="page-title">
                <h2>{pageTitle}</h2>
            </div>
            <div className="product-container">
                <ProductCard 
                imgsrc="https://i.pinimg.com/736x/5e/86/b9/5e86b952ae661d28474f857ab798246d.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="John Doe"
                    price="$49.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Kate Done"
                price="$79.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/236x/18/2d/64/182d64b6814660221e8714524019edea.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Nova Alf"
                price="$123.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/474x/cf/52/2d/cf522d5c488f825d8cb6b047efb7dac8.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Daren Fire"
                price="$145.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/736x/5e/86/b9/5e86b952ae661d28474f857ab798246d.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="John Doe"
                    price="$49.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Kate Done"
                price="$79.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/236x/18/2d/64/182d64b6814660221e8714524019edea.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Nova Alf"
                price="$123.99"/> 
                
                <ProductCard 
                imgsrc="https://i.pinimg.com/474x/cf/52/2d/cf522d5c488f825d8cb6b047efb7dac8.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Daren Fire"
                price="$145.99"/> 
            </div>
        </div>
    );
}

export default ShopPage;