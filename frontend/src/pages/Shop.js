import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ShopPage = () => {

    const [products, setProducts] = useState([]);

    async function getProducts() {
        try{
        await axios.get('http://localhost:5000/products/')
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            });
        }catch(error){
            console.error('Error fetching products: ', error);
        }
            
    }
    useEffect(()=>{
        getProducts();
    },[]);

    const navigate=useNavigate();

    const productItems = products.map((product) =>{

       return( 
       <div 
        key={product._id}
        onClick={()=> navigate(`/product/${product._id}`)}
        style={{cursor:'pointer'}}
       >
       <ProductCard
                imgsrc={product.images[0]} 
                name={product.name} 
                description={product.description}
                artist={product.artistName}
                    price={`$${product.price}`}/>
        </div>
        );

    });


    const pageTitle = "Shop";
    return(
        <div className="shop-page">
            <div className="page-title">
                <h2>{pageTitle}</h2>
            </div>
            <div className="product-container">
                {productItems}
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