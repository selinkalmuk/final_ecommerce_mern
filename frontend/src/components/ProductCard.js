import "../assets/styles/productCard.css";

const ProductCard = ({imgsrc, name, description, artist, price})=>{

    return (
        <div class="product-card">
        <img src={imgsrc} alt="Product Image" class="product-image" />
        <div class="product-info">
          <h3 class="product-title">{name}</h3>
          <p class="product-description">{description}</p>
          <p class="product-artist">Artist: <span>{artist}</span></p> 
          <div class="product-price">
            <span>{price}</span>
          </div>
        </div>
      </div>
    );
}

export default ProductCard;