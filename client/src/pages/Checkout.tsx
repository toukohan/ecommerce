import { useEffect, useContext, useState } from 'react';
import { CartContext, CartItem } from '../context/CartProvider';
import { UserContext, User } from '../context/UserProvider';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import axios from '../api/axios';
import './Checkout.scss';

interface Customer extends User {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zip: string;
    phone: string;

}
const Checkout = () => {
    const { userData } = useContext(UserContext);
    const [customer, setCustomer] = useState<Customer| null>(null)
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    const getCustomer = async () => {
        const response = await axios.get('/api/auth/me');
        console.log(response);
    }

    useEffect(() => {
        if(userData?.user !== null) {
            getCustomer();
        }
        dispatch({ type: 'TOGGLE_CART_HIDDEN', payload: true })
    }, [userData]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log("handling submit")
        }

    return (
        <div className="checkout-container">
            <div className="checkout-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" value={customer?.firstName} />
                    <input type="text" placeholder="Last Name" value={customer?.lastName} />
                    <input type="text" placeholder="Address" value={customer?.address} />
                    <input type="text" placeholder="City" value={customer?.city} />
                    <input type="text" placeholder="Zip" value={customer?.zip} />
                    <input type="text" placeholder="Phone" value={customer?.phone} />
                    <Button type="submit" variant="contained" color="primary">Order</Button>
                </form>
            </div>
            <div className="checkout-items">
                {cart.cartItems.map((item: CartItem) => (
                    <div className="checkout-item">
                        <p>{item.quantity} x {item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Checkout;