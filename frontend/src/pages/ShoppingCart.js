import React, { useEffect } from "react";
import  CartCard  from "../components/CartCard";
import {useState} from "react";
import axios from "axios";

const ShoppingCart = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);  // Kullanıcıyı set et
                
                try {
                    
                    const response = await axios.get(`http://localhost:5000/cart/${parsedUser._id}`);
                    console.log(response.data.products);  // Sepet verisini set et
                    setCartItems(response.data.products);
                } catch (error) {
                    console.error("Sepet verileri alınamadı.", error);
                } finally {
                    setLoading(false);  // Yükleme durumu sonlandır
                }
            } else {
                setLoading(false);  // Eğer kullanıcı yoksa, yükleme biter
            }
        };

        fetchData();  // fetchData fonksiyonunu çağırıyoruz
    }, []); // useEffect yalnızca component mount olduğunda çalışacak

    if (loading) {
        return <div>Loading...</div>;
    }
    

    if (!user) {
        return <div>Giriş yapmadınız!</div>;
    }
    cartItems.map((cartItem) => (console.log(cartItem)));

    return (
    <div>
        <h1>{user ? `${user.username}'s Shopping Cart` : 'Shopping Cart'}</h1>
        {cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
                const product = cartItem.productId; // Ürün detaylarını alıyoruz
                const firstImage = product.images ? product.images[0] : null; // İlk resim

                return (
                        <CartCard
                            key={cartItem._id} // Her bir öğeye key ekliyoruz
                            imgsrc={firstImage} // İlk resim
                            title={product.name} // Ürün adı
                            price={product.price} // Ürün fiyatı
                            category={product.category}
                            quantity={cartItem.quantity} // Sepet miktarı
                        />
                    );
                })
            ) : (
                    <h1>Sepetinizde ürün bulunmamaktadır</h1>
            )}        
    </div>
    );
    }

export default ShoppingCart;