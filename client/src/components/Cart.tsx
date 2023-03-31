import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import './Cart.scss';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const handleClearCart = () => {
        setCart([]);
    };

    const handleRemoveItem = (id: number) => {
        setCart((prev: any) => prev.filter((item: any) => item.product.id !== id));
    };

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            
            <div className="cart-items">
                {cart.map(({product, quantity}) => (
                    <div className="cart-item">
                        <p>{quantity} x {product.name} <span onClick={() => handleRemoveItem(product.id)}>❌</span></p>
                        <p>{product.price}</p>
                        
                    </div>
                ))}
            </div>
            <Link to="/checkout">
                <Button variant="contained" color="primary">Checkout</Button>
            </Link>
            <Button onClick={handleClearCart} variant="contained" color="secondary">Clear Cart</Button>
        </div>
    );
};

export default Cart;