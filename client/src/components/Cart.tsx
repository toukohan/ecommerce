import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import { Button } from '@mui/material';
import './Cart.scss';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-items">
                {cart.map(({product, quantity}) => (
                    <div className="cart-item">
                        <p>{quantity} x {product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <Button variant="contained" color="primary">Checkout</Button>
        </div>
    );
};

export default Cart;