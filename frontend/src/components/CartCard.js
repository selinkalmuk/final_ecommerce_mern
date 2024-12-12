import "../assets/styles/workshopCard.css";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const CartCard = ({ imgsrc, title, price, quantity, cart_id, category, onMoreInfoClick, onRemoveClick }) => {
    return (
        <div className="workshop-card">
            <img src={imgsrc} alt={title} className="cart-item-image" />
            <div className="content">
                <h3 className="workshop-title">{title ? title : "Title"}</h3>
                <p className="cart-category">{category ? category : "Category"}</p>
            </div>
            <div className="details">
                <p className="cart-quantity">Quantity: {quantity}</p>
                <span className="cart-price">${price}</span>
                <span className="cart-total">Total: ${(price * quantity).toFixed(2)}</span>
            </div>
            <div className="button-container">
                <button className="more-info-button" onClick={onMoreInfoClick}><FaInfoCircle size={20}/></button>
                <button className="remove-button" onClick={onRemoveClick}><MdDelete size={25}/></button>
            </div>
        </div>
    );
};

export default CartCard;

