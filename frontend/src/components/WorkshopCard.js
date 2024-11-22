import "../assets/styles/workshopCard.css";

const WorkshopCard = ({imgsrc, title, category, instructor, location, date, price}) =>{


    return (
        <div className="workshop-card">
         
            <img src={imgsrc} alt="" />
            <div className="content">
                <h3 className="workshop-title">{title}</h3>
                <p className="workshop-category">{category}</p>
                <p className="instructor">{instructor}</p>
                
            </div>
            <div className="details"><p className="location">{location}</p>
                <span className="date">{date}</span>
                <span className="price">{price}</span>
            </div>
            <button>More Info</button>
        </div>
    );
};

export default WorkshopCard;

