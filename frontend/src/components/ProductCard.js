import "../assets/styles/productCard.css";

const ProductCard = ({imgsrc, name, description, artist, price})=>{

    return (
        <div className="product-card">
        <img src={imgsrc} alt="Product Image" className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{name}</h3>
          <p className="product-description">{description}</p>
          <p className="product-artist">Artist: <span>{artist}</span></p> 
          <div className="product-price">
            <span>{price}</span>
          </div>
        </div>
      </div>
    );
}

export default ProductCard;