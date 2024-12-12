import {useEffect, useState}from "react";
import "../assets/styles/productdetail.css";
import ArtistInfo from '../components/ArtistInfo';
import { useParams } from "react-router-dom";
import axios from "axios";
const WorkshopDetail = () =>{
    const {id} = useParams();
    const[workshop, setWorkshop] = useState(null);
 
    useEffect(()=>{
        try {
          axios.get(`http://localhost:5000/workshops/${id}`)
            .then(response =>{
                setWorkshop(response.data);
                console.log(response.data);
            })  
        } catch (error) {
            console.error("Error fetching workshop:", error);
            
        }
        
    }, [id]);
    // Workshop verisi yüklenene kadar bir yükleniyor göstergesi veya null kontrolü
    if (!workshop) {
        return <div>Loading workshop details...</div>;
    }

    return (
        
    <div class="product-page">
    <div class="product-details">
    <img className="product-img" src={workshop.images[0]} alt="artwork" />
        <div class="product-info">
            <h1 class="product-title">{workshop.title}</h1>
            <div className="product-material">Category of Workshop</div>
            <div className="product-dimensions">
                {workshop.instructor}
            </div>
            <div className="product-stock">{workshop.date}</div>
           
            <div className="artist-id">{workshop.location}</div>
            <div className="seller-name">12 person is joining</div>
            <div className="product-category">{workshop.category}</div>
            <p class="artist-name">By {workshop.instructor}</p>
            <div className="workshop-price">${workshop.price}</div>
            <div class="product-price">Join Workshop</div>
        </div>
        <p class="product-description">
            {workshop.description}      
        </p>
        <hr/>
        <ArtistInfo />
        </div>
    
    </div>
    


    );
}

export default WorkshopDetail;