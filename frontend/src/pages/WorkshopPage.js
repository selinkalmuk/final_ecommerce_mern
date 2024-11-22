import React from "react";
import WorkshopCard from "../components/WorkshopCard";
import "../assets/styles/workshopCard.css";
const WorkshopPage = () => {

    const pageTitle = "Workshops";
    return(
        <div className="shop-page">
            <div className="page-title">
                <h2>{pageTitle}</h2>
            </div>
            <div className="workshop-container">
                <WorkshopCard 
                    imgsrc = "https://i.pinimg.com/736x/5e/86/b9/5e86b952ae661d28474f857ab798246d.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="John Doe" 
                    location="İstanbul" 
                    date="20.11.2024" 
                    price="$15.00"
                />
                <WorkshopCard 
                    imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="John Doe" 
                    location="İstanbul" 
                    date="20.11.2024" 
                    price="$15.00"

                />
                <WorkshopCard 
                    imgsrc="https://i.pinimg.com/236x/18/2d/64/182d64b6814660221e8714524019edea.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="Mark Fallin" 
                    location="Berlin" 
                    date="10.11.2024" 
                    price="$19.90"

                />
                <WorkshopCard 
                    imgsrc="https://i.pinimg.com/474x/cf/52/2d/cf522d5c488f825d8cb6b047efb7dac8.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="Jane Doe" 
                    location="İstanbul" 
                    date="2.12.2024" 
                    price="$25.00"

                />
                <WorkshopCard 
                    imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="Kate Done" 
                    location="Ankara" 
                    date="26.11.2024" 
                    price="$35.00"
                />
               
            </div>
        </div>
    );
}

export default WorkshopPage;