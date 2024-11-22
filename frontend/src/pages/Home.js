// src/pages/HomePage.js
import React from 'react';

import CategoryCard from '../components/CategoryCard';

import ProductCard from "../components/ProductCard";
import "../assets/styles/productCard.css";
import WorkshopCard from '../components/WorkshopCard';
const HomePage = () => {
  return (
    <div className='homepage'>
      
      <div className="categories">
        <CategoryCard 
          category="Artworks" 
          link="/artworks" 
        />
        <CategoryCard 
          category="Artists" 
          link="/artists" 
        />
        <CategoryCard 
          category="Workshops" 
          link="/workshops" 
        />
        <CategoryCard 
          category="Community" 
          link="/community" 
        />
        <CategoryCard 
          category="Shop" 
          link="/shop" 
        />
      </div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <div className="row-title">
        <h3>Recently Added Artworks</h3>
      </div>
      <div className="home-container">
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
      <div className="row-title">
        <h3>Recent Workshops</h3>
      </div>
      <div className="home-container">
      <WorkshopCard 
                    imgsrc = "https://i.pinimg.com/474x/cf/52/2d/cf522d5c488f825d8cb6b047efb7dac8.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="John Doe" 
                    location="İstanbul" 
                    date="20.11.2024" 
                    price="$15.00"
                />
      </div>
    </div>
  );
};

export default HomePage;
