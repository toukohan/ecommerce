import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.scss';

interface Item {
    id: number;
    name: string;
    price: number;
    quantity?: number;
}

const Cart = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const handleRemoveItem = (id: number) => {
        dispatch({ type: 'DECREASE', payload: id });
    };

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            
            <div className="cart-items">
                {cart.cartItems.map((item: Item) => (
                    <div className="cart-item" key={item.id}>
                        <p>{item.quantity} x {item.name} <span className="remove-item" onClick={() => handleRemoveItem(item.id)}>❌</span></p>
                        <p>{item.price * (item.quantity || 1)}</p>
                        
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