import React from "react";
import {Link} from 'react-router-dom';
import '../assets/styles/categories.css';
const CategoryCard = ({category, link}) =>{

    return(
        <div className="category-card">
            <div className="category-info">
            <Link to={link} className="link">
                <h3>{category}</h3>
            </Link>
            </div>
        </div>
    );

}
export default CategoryCard;

/**
 <Link to = {link}>
                <button className="view-more"> View More</button>
                </Link>
 */